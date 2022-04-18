import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "20px 10px",
        border: "1px solid black",
        width: "1000%",
        height: "200%",
        marginLeft: "150%"
    }
}));

export default function StudentPersonalDetails() {
    const classes = useStyles();
    const [attributes, setAttributes] = useState({
        studentName: '',
        addmissionNo: '',
        classSec: ''
    });
    const onChange = (e, id) => {
        setAttributes({
            ...attributes,
            [id]: e.target.value
        })
    };

    return (
        <div>
            <div>
                            <Grid container spacing={4}>
                                <Grid item xs={1}>
                                    <Paper className={classes.paper} variant="outlined" elevation={3}>
                                        <div>

                                            <label><b>Student Name</b></label>
                                            {"  "}
                                            <input value={attributes.studentName} type="text" style={{
                                                width: "30%",
                                                height: "9%",
                                                padding: "15px",
                                                margin: "5px 0 22px 0",
                                                display: "inline-block",
                                                border: "none",
                                                background: "#f1f1f1"
                                            }} placeholder="Enter your Student Name" onChange={(e) => onChange(e, 'studentName')} required />

                                            <label style={{ paddingLeft: "10px" }}><b> Standard</b></label>

                                            <select type="text" style={{
                                                width: "30%",
                                                height: "20%",
                                                padding: "15px",
                                                margin: "5px 0 22px 0",
                                                display: "inline-block",
                                                border: "none",
                                                background: "#f1f1f1"
                                            }} onChange={(e) => onChange(e, 'standard')} required>
                                                <option value="select">Select your Standard</option>
                                                <option value="lkg">LKG</option>
                                                <option value="ukg">UKG</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>

        </div>

    )

}


