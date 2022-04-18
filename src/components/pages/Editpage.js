import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Forgotpassword from './Forgotpassword'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// function Signup() {

// }
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    height: 300,
    flexGrow: 1,
    //minWidth: 300,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'300px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  // modal: {
  //   display: 'flex',
  //   padding: theme.spacing(1),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Editpage() {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(true);
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailid, setEmailid] = React.useState('')
  const [phonenumber, setPhonenumber] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [errmsg,setErrmsg] = useState("");
  const[id, setId] = React.useState('');
  const [active_flag, setActive_flag] = React.useState('')

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // const updateUser = (id) => {
  //   setId({ firstname: id.firstname,lastname: id.lastname,
  //      emailid: id.emailid, username: id.username,
  //       password: id.password, phonenumber: id.phonenumber })

  //       axios
  //     .put(
  //       'http://35.192.144.246:8085/user/update/',id
         
  //     )

  // }

  
  
//   useEffect(() => {
//     if (localStorage.getItem('user-info')) {
//         // history.push("/signup")
//     }
// }, [])
  
  async function edit() {
    console.warn(id,firstname, lastname, username,password,emailid,phonenumber,active_flag);
    let item = {id, firstname, lastname, username,password,emailid,phonenumber,active_flag};
   let result = await fetch("http://35.192.144.246:8085/user/update/" +id, 
     {
        method: 'put',
        headers: {
            "content-Type": "application/json",
            "Accept": 'application/json',
            "Authorization": 'apiKey'
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    
    if(result.statusMessage.code == 200){
      console.log("succ", result.statusMessage.code)
      console.log(id,firstname, lastname, username,password,emailid,phonenumber,active_flag);
    }
    else 
    {
      console.log("error",result.statusMessage.code)
    }
   
}
  return (
    <div >
      
    <Container component="main" maxWidth="xs">
    
     
      <div className={classes.paper} >
      
        <Typography component="h1" variant="h5">
         Update the users details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                placeholder='ID'
                name="id"
                variant="outlined"
                disable="true"
                size="small"
                type="text"
                label="id"
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder='First Name'
                name="first_name"
                variant="outlined"
                size="small"
                type="text"
                label="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
              placeholder='lastname'
                variant="outlined"
                size="small"
                type="text"
                label="Last Name"
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              placeholder='User Name'
                variant="outlined"
                size="small"
                type="text"
                
                label="UserName"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              placeholder='Password'
                variant="outlined"
                size="small"
                name="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder='Email'
                variant="outlined"
                size="small"
                type="text"
                label="Email Address"
                name="emailid"
                onChange={(e) => setEmailid(e.target.value)}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
               placeholder='Phone Number'
                variant="outlined"
                size="small"
                type="text"
                label="Phone Number"
                name="phonenumber"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               placeholder='active_flag'
                variant="outlined"
                size="small"
                type="text"
                label="ActiveFlag"
                name="active_flag"
                onChange={(e) => setActive_flag(e.target.value)}
              />
            </Grid>
            <Grid item xs={11}>
            <Button
            color="danger"
            className={classes.submit}
            class="btn btn-info"
            // onClick={() => updateUser(id)}
            onClick={edit}
          >
           Update
          </Button>
            </Grid>
            
              
           
          </Grid>
          {/* <div style={{color:"red"}}>{errmsg}</div> */}
        </form>

      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      {/* <div className={classes.root} ref={rootRef} >
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
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
          <div className={classes.paper}
          style={{ 
          // marginLeft: "480px",
          // marginRight: "350px",
          // marginTop: "20px",
          // background:'white',
          // width:"430px"
        }}
          >
            
            <div style={{ 
              //  marginLeft: "50%",
              //  marginRight: "50%",
              //  marginTop: "50%",
              //  background:'white',
              //  width:"430px"

            }}className={classes.paper} >
            <Forgotpassword/>
            <br />
            </div>
          </div>
        </Fade>
      </Modal>
    </div> */}
    </Container>
    
    </div>
    //model window

  );
}