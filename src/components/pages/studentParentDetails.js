import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from 'react-avatar';
import ParentProfileTable from '../pages/tables/parentProfileTable';
import ParentAddressDetailsTable from '../pages/tables/parentAddressDetailsTable';
//import styles from '../pages/styles/styles.scss';
import Button from 'react-bootstrap/Button';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {orange } from '@material-ui/core/colors';
// import { getTranslatedText as t} from '../translations';
import { useTranslation } from 'react-i18next'

//const style = styles;
const useStyles = makeStyles((theme) => ({
    paper: {
        width: "1700%",
        marginLeft: "130%",
        display: "flex",
        backgroundColor:"#fefbd8"
    },
    h4: {
        color: "red",
    },
    inputField: {
        display: "inline-block",
        border: "none",
        background: "#f1f1f1",
        height: "30px"
    },
    headPaper: {
          backgroundColor:"#d5f4e6",
          width: "1800%",
        marginLeft: "80%",
        display: "flex",
    
      }
}));

export default function StudentParentDetails() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [attributes, setAttributes] = useState({
        studentName: 'Smita Kalaujia',
        admissionNo: '05642',
        classSec: 'II - A',
        search1: '',
        search2:''
    });
    const onChange = (e, id) => {
        setAttributes({
            ...attributes,
            [id]: e.target.value
        })
    };
    function handleClick(lang) {
        i18n.changeLanguage(lang);
      }

    return (
        <div>
            {/* <div>
            <button onClick={()=>handleClick('en')}> English</button>
                    <button onClick={()=>handleClick('tn')}> Tamil</button>
            </div> */}

            <div>
                {/* Panel2 */}
                <div className="styles">
                    <Grid container spacing={5}>
                        <Grid item xs={1}>
                            <Paper variant="outlined" elevation={3} className={classes.headPaper} style={{ border: "1px solid black" }}   >
                                <h4 className={classes.h4} style={{ marginLeft: "42%" }} >{t('User Profile')}</h4>
                            </Paper>
                            <Paper variant="outlined" elevation={3} className={classes.paper}>
                                <label className='AdmissionNo' style={{ marginLeft: "2%" }}><b>{t('Admission No')}</b></label>
                                {"  "}
                                <input value={attributes.admissionNo} className={classes.inputField}
                                    placeholder="Enter your Admission No" onChange={(e) => onChange(e, 'admissionNo')} required />
                                {" "}

                                <label style={{ marginLeft: "2%" }}><b>{t('Username')}</b></label>
                                {"  "}
                                <input value={attributes.studentName} className={classes.inputField} id="input-field" placeholder="Enter your Name" onChange={(e) => onChange(e, 'studentName')} required />
                                {" "}

                                <label style={{ marginLeft: "2%" }}><b>{t('Class/Section')}</b></label>
                                {"  "}
                                <input value={attributes.classSec} className={classes.inputField} placeholder="Enter your Class" onChange={(e) => onChange(e, 'classSec')} required />
                                {" "}

                                <Avatar style={{ marginLeft: "2%" }} facebookId="100008343750912" />


                            </Paper>
                            <br />
                            <br />
                            <Paper variant="outlined" elevation={3} className={classes.headPaper} style={{ border: "1px solid black" }}   >
                                <h4 className={classes.h4} style={{ marginLeft: "42%" }} >{t('Parent Profile')}</h4>
                            </Paper>
                            <Paper variant="outlined" elevation={3} className={classes.paper}   >
                                <select className={classes.inputField} type="text" onChange={(e) => onChange(e, 'selectValue')} required>
                                    <option value="all">{t('All')}</option>
                                    <option value="sName">{t('Student Name')}</option>
                                    <option value="pName">{t('Parent Name')} </option>
                                </select>
                                {"  "}
                                <Input value={attributes.search1} startAdornment={
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                } placeholder="Search" onChange={(e) => onChange(e, 'search1')} required />

                                <select style={{ marginLeft: "52%" }} className={classes.inputField} type="text" onChange={(e) => onChange(e, 'selectValue')} required>
                                    <option value="all">{t('All')}</option>
                                    <option value="sName">{t('Student Name')}</option>
                                    <option value="pName">{t('Parent Name')}</option>
                                </select>
                                {"  "}
                                <Button style={{ backgroundColor: "green", color: "whitesmoke", width: "100px" }} variant="outline-success">Add <AiOutlinePlus /></Button>
                            </Paper>

                            <Paper variant="outlined" elevation={3} className={classes.paper}>
                                <ParentProfileTable />
                            </Paper>
                            <br />
                            <br />

                            <Paper variant="outlined" elevation={3} className={classes.headPaper} style={{ border: "1px solid black" }}  >
                                <h4 className={classes.h4} style={{ marginLeft: "42%" }} >{t('Address Details')}</h4>
                            </Paper>
                            <Paper variant="outlined" elevation={3} className={classes.paper}   >
                                <select className={classes.inputField} type="text" onChange={(e) => onChange(e, 'selectValue')} required>
                                    <option value="all">{t('All')}</option>
                                    <option value="sName">{t('Student Name')}</option>
                                    <option value="pName">{t('Parent Name')} </option>
                                </select>
                                {"  "}
                                <Input value={attributes.search2} startAdornment={
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                } placeholder="Search" onChange={(e) => onChange(e, 'search2')} required />

                                <select style={{ marginLeft: "52%" }} className={classes.inputField} type="text" onChange={(e) => onChange(e, 'selectValue')} required>
                                    <option value="all">{t('All')}</option>
                                    <option value="sName">{t('Student Name')}</option>
                                    <option value="pName">{t('Parent Name')}</option>
                                </select>
                                {"  "}
                                <Button style={{ backgroundColor: "green", color: "whitesmoke", width: "100px" }} variant="outline-success">Add <AiOutlinePlus /></Button>
                            </Paper>
                            <Paper variant="outlined" elevation={3} className={classes.paper}>
                                <ParentAddressDetailsTable />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>

    )

}


