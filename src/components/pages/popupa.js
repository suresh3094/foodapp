import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Popupa() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t, i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const pid = open ? 'simple-popover' : undefined;

  const [del, setDel] = useState();
  const[id, setId] = useState('');
  
  // delete function
  const deleteClick = () => {
    axios
      .delete("http://35.192.144.246:8085/user/delete" +id)
      .then((res) => {
        console.log("res", res);
        setDel(res.del);
        console.log("data", res.del);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <DeleteIcon onClick={handleClick} />
        
      
      <Popover
        id={pid}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        <Grid item xs={12}>
                            <div>
                              <TextField
                                placeholder='Do you want to delete?'
                                size="small"
                                variant="outlined"
                                className={classes.widthcls}
                                disabled
                              />
                              {/* <h6>Do you want to delete?</h6> */}
                              {"  "}
                              <Button onClick={() => deleteClick(id)} alignItems="center" variant="contained" style={{backgroundColor:"red", color:"whitesmoke"}}> Delete</Button>
                            </div>
                          </Grid>
        </Typography>
      </Popover>
    </div>
  );
}
