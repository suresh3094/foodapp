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
    const [id,setId]=  React.useState('')
    const [title, setTitle] = React.useState('')
    const [announcement, setAnnouncement] = React.useState('')
    //const [active_flag, setActive_flag] = React.useState('')
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

     
      
      async function update() {
        console.warn(id,title,announcement)
        let item = { id,title,announcement};
        // let result = await fetch("http://localhost:8085/school/signup",
        let result = await fetch("http://35.192.144.246:8085/update/" +id, 
         {
            method: 'put',
            headers: {
                "content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
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

            <div style={{ paddingLeft: "100px", color: "black", paddingTop: "20px" }}>
                <h3><strong>Announcement</strong> </h3>
            </div>

            <div className={classes.root} >
           


                <Accordion expanded={expanded} onChange={() => handleChange()}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}><b>Edit Announcement</b></Typography>
                    </AccordionSummary>
                    <div>
                        <AccordionDetails>
                       <Typography>
                        <Grid container spacing={2}>

                        <Grid item xs={4}>
              <TextField
                placeholder='ID'
                name="id"
                variant="outlined"
                size="small"
                type="text"
                label="ID"
                onChange={(e) => setId(e.target.value)}
              />
               </Grid>
                            
                         <Grid item xs={4}>
              <TextField
                placeholder='Title'
                name="title"
                variant="outlined"
                size="small"
                type="text"
                label="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
               </Grid>
               <Grid item xs={4}>
              <TextField
                placeholder='Announcement'
                name="announcement"
                variant="outlined"
                size="small"
                type="text"
                label="Announcement"
                onChange={(e) => setAnnouncement(e.target.value)}
              />
            </Grid>
            </Grid>
                        </Typography>
                        </AccordionDetails>
                    </div>
                    <div>
                        <AccordionDetails style={{ paddingLeft: "1070px" }}>
                        
                               <Button style={{
                                    paddingLeft: "0px", color: "whitesmoke", opacity: "0.9",
                                    width: "100px",
                                    backgroundColor: "blue",
                                    textAlign: "center",
                                    padding: "10px 10px",
                                    margin: "9px 1px",
                                    marginLeft: "95px",
                                    cursor: "pointer"
                                }}
                                className={classes.submit}
                                class="btn btn-info"
                                onClick={update}>Update</Button>
                               <br />

                               

                               
     
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
         
 
    </div>
                </Accordion>



            </div>
           

        </div>

    )

}


