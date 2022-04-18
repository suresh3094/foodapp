import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SidenavPage from './sidenavPage'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import StudentParentDetails from '../pages/studentParentDetails';
import StudentPersonalDetails from '../pages/studentPersonalDetails';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';
import { useTranslation } from 'react-i18next'

export default function StudentManagement() {
    const theme = unstable_createMuiStrictModeTheme();
    const { t, i18n } = useTranslation();
    const [attributes, setAttributes] = useState({
        studentName: '',
        standard: '',
        parentName: '',
        addmissionNo: '',
        classSec: '',
        qualification: '',
        lang:''
    });
    const onChange = (e, id) => {
        setAttributes({
            ...attributes,
            [id]: e.target.value
        })
    };
    

    return (
        <div>


            <div className="mt">
                <Nav fillvariant="pills" style={{ backgroundColor: "black" }}>
                    <Nav.Link style={{
                        paddingLeft: '20%',
                        color: 'red',
                        display: 'inline'
                    }}>
                        <h5><strong>{t('Home -- Student Management')}</strong></h5></Nav.Link>
                </Nav>
                <br />
            </div>
            {/* <div>
                <SidenavPage />
            </div> */}

            <div>
                <Tabs style={{ marginLeft: "17%", marginRight: "15%" }}>
                    <TabList>
                        <Tab><strong>{t('User Personal Details')}</strong></Tab>
                        {"  "}
                        <Tab><strong>{t('User Parent Details')}</strong></Tab>
                        {"  "}
                        <Tab><strong>{t('User Last School Details')}</strong></Tab>
                        {"  "}
                        <Tab><strong>{t('User Relative in School')}</strong></Tab>
                        {"  "}
                        <Tab><strong>{t('User Health Details')}</strong></Tab>
                    </TabList>

                    {/* Panel1 */}
                    <TabPanel>
                        <StudentPersonalDetails />
                    </TabPanel>

                    {/* Panel2 */}
                    <TabPanel>
                        <StudentParentDetails />
                    </TabPanel>
                    <TabPanel>
                        <h1>Three</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Four</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Five</h1>
                    </TabPanel>
                </Tabs>
            </div>

        </div>

    )

}


