import react, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'react-bootstrap/Button';
import SidenavPage from '../pages/sidenavPage';
import ViewAllUsers from '../pages/ViewAllUsers';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginLeft: "15%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: 'white',
        width: '30%', padding: '10px',
        fontSize: '0.9375rem',
        background: 'linear-gradient(#0D47A1, #0D47A1)',
        fontWeight: '400',
        borderTopLeftRadius: '20px',
        borderBottomRightRadius: '20px'
    },


    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },


}));

export default function Addusers() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [hotelName, setHotelName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [active, setActive] = React.useState('');
    const [SelectedFile, setSelectedFile] = useState();
    const [isFilePicked, setisFilePicked] = useState(false);
    const [errmsg,setErrmsg] = useState("");

    const changeHandler = (event)=>{
        setSelectedFile(event.target.files[0]);
        
    };

    const handleSubmission=()=>{

    };
    
    const handleChange = () => {
        setExpanded(!expanded);
    };
   const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/signup")
        }
    }, [])
      
      async function signup() {
        console.warn(hotelName);
        let item = { hotelName, description, active ,SelectedFile};
        // let result = await fetch("http://localhost:8085/school/signup",
        let result = await fetch('https://food-order-ver-1.herokuapp.com/addHotel', {
			method: 'post',
			headers: {
				'content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(item),
		});
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        if(result.statusMessage.code == 200){
        //   history.push("/Addusers")
        }
        
    }

    




    return (
		<div>
			<div>
				<SidenavPage />
			</div>

			<div style={{ paddingLeft: '100px', color: 'black', paddingTop: '20px' }}>
				<h3>
					<strong>Hotel</strong>{' '}
				</h3>
			</div>

			<div className={classes.root}>
				<Accordion expanded={expanded} onChange={() => handleChange()}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading}>
							<b>Add Hotel</b>
						</Typography>
					</AccordionSummary>
					<div>
						<AccordionDetails>
							<Typography>
								<Grid container spacing={2}>
									<Grid item xs={4}>
										<TextField
											placeholder="HotelName"
											name="hotelName"
											variant="outlined"
											size="small"
											type="text"
											label="HotelName"
											onChange={(e) => setHotelName(e.target.value)}
										/> 
									</Grid>
                                    <Grid item xs={4}>
                                        <input type="file" name="file" onChange={changeHandler}/>
                                        <div>
                                            <button onClick={handleSubmission}>submit</button>
                                        </div>
                                    </Grid>
									<Grid item xs={4}>

										<TextField
											placeholder="Description"
											name="description"
											variant="outlined"
											size="small"
											type="text"
											label="Description"
											onChange={(e) => setDescription(e.target.value)}
										/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											placeholder="Active"
											name="active"
											variant="outlined"
											size="small"
											type="text"
											label="Active"
											onChange={(e) => setActive(e.target.value)}
										/>
									</Grid>
								</Grid>
							</Typography>
						</AccordionDetails>
					</div>
					<div>
						<AccordionDetails style={{ paddingLeft: '1070px' }}>
							{/* <Button
                                color="danger"
                                className={classes.submit}
                                class="btn btn-info"
                                onClick={signup}
                                 >
                                 Add
                               </Button> */}
							<Button
								style={{
									paddingLeft: '0px',
									color: 'whitesmoke',
									opacity: '0.9',
									width: '100px',
									backgroundColor: 'blue',
									textAlign: 'center',
									padding: '10px 10px',
									margin: '9px 1px',
									marginLeft: '95px',
									cursor: 'pointer',
								}}
								className={classes.submit}
								class="btn btn-info"
								onClick={signup}
							>
								Add
							</Button>
							<br />

							<Button
								href="/ViewAnnouncement"
								style={{
									paddingLeft: '0px',
									color: 'whitesmoke',
									opacity: '0.9',
									width: '100px',
									backgroundColor: 'blue',
									textAlign: 'center',
									padding: '10px 10px',
									margin: '9px 0px',
									marginLeft: '95px',
									cursor: 'pointer',
								}}
							>
								View
							</Button>
						</AccordionDetails>
					</div>

					{/* <div>
                        <AccordionDetails>
                            <Typography>
                                <ViewAllUsers/>
                            </Typography>
                        </AccordionDetails>
                    </div> */}
					<div></div>
				</Accordion>
			</div>
			{/* <div>
                <Button href="/Dashboard" style={{
                    opacity: "0.9",
                    color: "white",
                    width: "100px",
                    backgroundColor: "red",
                    textAlign: "center",
                    padding: "5px 20px",
                    margin: "5px 0",  

                    marginLeft: "1500px",
                    cursor: "pointer"
                }}>Cancel</Button>
            </div> */}
		</div>
	);

}


