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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
    const [modal_window, setModal_window] = React.useState(false);
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(true);
    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailid, setEmailid] = React.useState('')
    const [phonenumber, setPhonenumber] = React.useState('')
    const [errmsg,setErrmsg] = useState("");
    
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
        console.warn(firstname, lastname, username,password,emailid,phonenumber)
        let item = { firstname, lastname, username,password,emailid,phonenumber};
        // let result = await fetch("http://localhost:8085/school/signup",
        let result = await fetch("http://35.192.144.246:8085/school/signup",
         {
            method: 'post',
            headers: {
                "content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        if(result.statusMessage.code == 200){
          history.push("/Addusers")
        }
        else{
          alert(result.statusMessage.description)
        }
        setErrmsg(result.statusMessage.description);
        console.log(result.statusMessage.description)
        const message = result.statusMessage.description
    }

    




    return (
        <div>
           <div>
                <SidenavPage />
            </div>

            <div style={{ paddingLeft: "100px", color: "black", paddingTop: "20px" }}>
                <h3><strong>Add Users</strong> </h3>
            </div>

            <div className={classes.root} >
            {/* <button type="button" onClick={handleOpen} 
           style={{ backgroundColor: "blue",color: "whitesmoke", width: "300px",height: '35px' }}>
                View all Users
            </button> */}
      <br />


                <Accordion expanded={expanded} onChange={() => handleChange()}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}><b>Add the users</b></Typography>
                    </AccordionSummary>
                    <div>
                        <AccordionDetails>
                       <Typography>
                        <Grid container spacing={2}>
                         <Grid item xs={12}>
              <TextField
                placeholder='First Name'
                name="firstname"
                variant="outlined"
                size="small"
                type="text"
                label="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              placeholder='Email'
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
               placeholder='Phone Number'
                variant="outlined"
                size="small"
                type="text"
                label="Phone Number"
                name="phonenumber"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Grid>
            </Grid>
                        </Typography>
                        </AccordionDetails>
                    </div>
                    <div>
                        <AccordionDetails style={{ paddingLeft: "1070px" }}>
                           
                              <Button
                                color="danger"
                                className={classes.submit}
                                class="btn btn-info"
                                onClick={signup}
                                 >
                                   Add
                               </Button>
                               <br />
                               </AccordionDetails>
                               <AccordionDetails style={{ paddingLeft: "1070px" }}>
                            <Button
                                color="danger"
                                className={classes.submit}
                                class="btn btn-info"
                                onClick={handleOpen}
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
          <div className={classes.paper}>
            {/* <h2 id="">Transition modal</h2> */}
            <p id="transition-modal-description" style={{textAlign:'center',color:'white'}}>Modal Window</p>
            <div style={{ }} >
            
            <ViewAllUsers/>
            </div>
            
          </div>
         
        </Fade>
      </Modal>
      

 
    </div>
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

    )

}


