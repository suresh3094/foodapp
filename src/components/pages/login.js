

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import a6 from '../../assets/A6.jpg'


import Avohi from '../../assets/avohi.png'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useTranslation } from 'react-i18next'

import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import Forgotpassword from "../pages/Forgotpassword";
import { loginUserAction } from '../../actions/authenticationActions';





const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${a6})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  // form: {
  //   width: '100%', // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  translationDropdown: {
    marginLeft: theme.spacing(80),
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // function for multi lang selection

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    // window.location.reload(false);
  }
  const language = localStorage.getItem('lang');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const history = useHistory();
  //   useEffect(() => {
  //     if (localStorage.getItem('user-info')) {
  //         history.push("/Loginpage")
  //     }
  // }, [])

  async function login() {
    console.warn(number, password);
    let item = { number, password };
    // let result = await fetch("http://localhost:8085/school/login",
    let result = await fetch('https://food-order-ver-1.herokuapp.com/login', {
		method: 'post',
		headers: {
			'content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(item),
	});
    result = await result.json();
    console.log(result);
    localStorage.setItem("user-info", JSON.stringify(result))
    if (result.statusMessage.code == 200) {
      history.push("/dashboard")
    }
    else {
      alert(result.statusMessage.description)
    }
    console.log(result.statusMessage.description)
    setErrmsg(result.statusMessage.description);
  }

  return (
		<Grid container component="main" className={classes.root}>
			{/* <Grid md={12}> */}
			{/* <div> */}

			{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{height:'70px'}}> */}
			{/* <p>{t('my translated text')}</p> */}

			<Grid item xs={7}>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{ height: '92px' }}>
					<div style={{ paddingBottom: '25px' }}>
						<br /> <img src={Avohi} alt="logo" style={{ width: '60px' }} />
					</div>
				</nav>
			</Grid>
			<Grid item xs={5}>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{ height: '92px' }}>
					<div class="col-3">
						<select
							onChange={(lang) => handleClick(lang.target.value)}
							value={language}
							style={{ width: '92px' }}
						>
							<option value="en">{t('English')}</option>
							<option value="tn">
								தமிழ்,
								{t('Tamil')}
							</option>
							<option value="ja">
								日本語,
								{t('Japanese')}
							</option>
						</select>
					</div>
				</nav>
			</Grid>

			{/* </nav> */}
			{/* </div> */}
			{/* </Grid> */}

			{/* Right side image Grid */}
			<Grid item xs={7} className={classes.image} />
			{/* Login form design grid */}
			<Grid item xs={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					{/* Login logo */}
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							placeholder={t('Number')}
							type="text"
							onChange={(e) => setNumber(e.target.value)}
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							placeholder={t('Password')}
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>

						{/* checkbox */}
						<FormControlLabel
							style={{ display: 'flex', alignItems: 'left' }}
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>

						<Button
							// type="submit"
							fullWidth
							variant="contained"
							color="primary"
							onClick={login}
							// className={classes.submit}
						>
							{t('Login')}
						</Button>
						<br />

						<div style={{ color: 'red' }}>{errmsg}</div>
						<br />
						<Grid container>
							<Grid item md={6} style={{ display: 'flex', alignItems: 'left' }}>
								<Link href="#" variant="body2" onClick={handleOpen}>
									Forgot password?
								</Link>
							</Grid>
							<Grid item md={6}>
								Don't have an account?
								<Link href="/signup" variant="body2">
									Sign Up
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>

			{/* Footer Grid */}
			<Grid item xs={12} style={{ backgroundColor: 'GrayText' }}>
				<div className="foo" style={{ color: 'white', textAlign: 'left', height: '50px' }}>
					{t(' Copyright © 2021 Avohi InfoTech All rights reserved')}
				</div>
			</Grid>
			<br />

			{/* modal window */}
			<div>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div
							className={classes.paper}
							style={{
								// marginLeft: "480px",
								// marginRight: "350px",
								//marginTop: "20px",
								//background:'white',
								width: '750px',
							}}
						>
							<div style={{}}>
								<Forgotpassword />
							</div>
						</div>
					</Fade>
				</Modal>
			</div>
		</Grid>
  );
}
