import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [advancesearch,setAdvancesearch]=React.useState();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <input value={advancesearch} type="text" style={{
                                border: "#fbc2eb",
                                background: "#f1f1f1",
                                width:"240px",
                                height:"55px",
                                borderRadius:"30px"

                            }} placeholder="Advancesearch"
                                onChange={advancesearch} required />
          </Paper>
        </Grid>
        
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Checkbox></Checkbox>
          <label>
          Student Details
          </label>
          <Paper variant="outlined">
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="First Name"
          labelPlacement="end"
        />
        <br />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Middle Name"
          labelPlacement="end"
        />
        <br />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Last Name"
          labelPlacement="end"
        />
        <br />

          </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Checkbox></Checkbox>
         <label  >Session/Class/Section</label>
        
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Checkbox></Checkbox>
              <label>
              Parent Details
              </label>
              <Paper>
              <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Father"
          labelPlacement="end"
        />
        <br />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Mother"
          labelPlacement="end"
        />
        <br />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Guardian"
          labelPlacement="end"
        />
              </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Checkbox></Checkbox>
              <label>
              Address Details
              </label>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
