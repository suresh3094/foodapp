import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';    
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1300,
    padding: '0px 0px 0px 71px',
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { t, i18n } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Cluster Details" {...a11yProps(0)} />
          <Tab label="Facilities Setup" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Paper variant="outlined">
        <Grid container justify="flex-right">
            <h2 style={{color:'#96e6a1'}}> 
            {t('Basic Information')}
            {/* Basic Information  */}
            </h2>
            </Grid>

       
        <Grid container spacing={1}>
           
                    <Grid item xs={12} sm={4}>
                        <label>{t('Cluster_office_name')}</label>
                      <TextField
                        id="Cluster_office_name"
                        name="Cluster_office_name"
                        
                        //value={}
                        //label="{t('Cluster_office_name')}"
                        fullWidth
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                        id="name"
                        name="name"
                        //value={}
                        label="name"
                        fullWidth
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Cluster_Name"
                        name="Cluster_Name"
                        //value={}
                        label="Cluster_Name"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Cluster_Management"
                        name="Cluster_Management"
                        //value={}
                        label="Cluster_Management"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Cluster_identifier"
                        name="Cluster_identifier"
                        //value={}
                        label="Cluster_identifier"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Website_URl"
                        name="Website_URl"
                        //value={}
                        label="Website_URl"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Esablished_date"
                        name="Esablished_date"
                        //value={}
                        label="Esablished date"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Cluster_Tagline"
                        name="Cluster_Tagline"
                        //value={}
                        label="Cluster Tagline"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        
                        id="Cluster_Vision_Statement"
                        name="Cluster_Vision_Statement"
                        //value={}
                        label="Cluster Vision Statement"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />
                    </Grid>
                    <Grid container justify="center">
                    {/* <Button variant="contained" color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}> Upload </Button> */}
                     <input
                     accept="image/*"
                     className={classes.input}
                     id="contained-button-file"
                     multiple
                     type="file"
                     />
                     <label htmlFor="contained-button-file">
                         <Button variant="contained" color="primary"
                         component="span">
                           {t('Upload')}
                           
                           {/* Upload */}
                         </Button>
                          </label>
                         
                    </Grid>
                    <br />
                    
            </Grid>
        </Paper>
        <br />
        <Paper variant="outlined">
            <br />
            <Grid container justify="flex-right">
            <h2 style={{color:'#96e6a1'}}> 
            {t('Contact Details')}
            
            {/* Contact Details */}
             </h2>
            </Grid>

        <Grid container spacing={1}>
           
           <Grid item xs={12} >
           <TextField
                        
                        id="address_line1"
                        name="address_line1"
                        //value={}
                        label="Address Line1"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
                <Grid item xs={12} >
           <TextField
                        
                        id="address_line2"
                        name="address_line2"
                        //value={}
                        label="Address Line2"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
           <TextField
                        
                        id="pincode"
                        name="pincde"
                        //value={}
                        label="Pin code"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
           <TextField
                        
                        id="city"
                        name="city"
                        //value={}
                        label="City"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
           <TextField
                        
                        id="State"
                        name="state"
                        //value={}
                        label="state"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
           <TextField
                        
                        id="country"
                        name="country"
                        //value={}
                        label="country"
                        fullWidth
                        required
                        variant="outlined"
                        
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
           <TextField  
                        id="phone_number1"
                        name="phone_number1"
                        //value={}
                        label="Phone Number1"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               <TextField  
                        id="phone_number2"
                        name="phone_number2"
                        //value={}
                        label="Phone Number2"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               <TextField  
                        id="fax1"
                        name="fax1"
                        //value={}
                        label="fax1"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               <TextField  
                        id="fax2"
                        name="fax2"
                        //value={}
                        label="Fax2"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               <TextField  
                        id="emailid1"
                        name="emailid1"
                        //value={}
                        label="email1"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               <TextField  
                        id="emailid2"
                        name="emailid2"
                        //value={}
                        label="email2"
                        fullWidth
                        required
                        variant="outlined"                   
                      />

               </Grid>
               <Grid item xs={12} xs={3}>
               {/* <Button variant="contained" color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}> Upload </Button> */}
                    <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
                     <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary"
         component="span">
          Upload
        </Button>
      </label>
               </Grid>

               </Grid>
        </Paper>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}
