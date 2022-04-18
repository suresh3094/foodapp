import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import React from 'react';
import signup from '../pages/signup';
import StudentManagement from '../pages/StudentManagement';
import SidenavPage from '../pages/sidenavPage';
import searchpagetable from "../pages/searchpagetable";
import Advancesearchpage from "../pages/Advancesearchpage";
import clustersetup from "../pages/clustersetup";
import StudentParentDetails from '../pages/studentParentDetails';
import StudentPersonalDetails from '../pages/studentPersonalDetails';
import ParentAddressDetailsTable from '../pages/tables/parentAddressDetailsTable';
import ParentProfileTable from '../pages/tables/parentProfileTable';
import Login from '../pages/login';
import Forgotpassword from "../pages/Forgotpassword";
import ViewAllUsers from '../pages/ViewAllUsers';
import popupa from '../pages/popupa';
import Dashboard from '../pages/dashboard';
import AnnouncementSection from '../pages/AnnouncementSection';
import Addusers from '../pages/Addusers';
import Editpage from '../pages/Editpage';
import Sidebar from '../pages/sidebar/Sidebar';
import SidebarPage from '../pages/sidebar/SidebarPage';
import Announcement from '../pages/Announcement';
import Editannouncement from '../pages/Editannouncement';
import ViewAnnouncement from '../pages/ViewAnnouncement';
import Announceviewbyid from '../pages/Announceviewbyid';

export default function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact component={Announceviewbyid} path="/Announceviewbyid" />
            <Route exact component={ViewAnnouncement} path="/ViewAnnouncement" />
            <Route exact component={Editannouncement} path="/Editannouncement" />
            <Route exact component={Announcement} path="/Announcement" />
            <Route exact component={SidebarPage} path="/SidebarPage" />
            <Route exact component={Sidebar} path="/Sidebar" />
            <Route exact component={Editpage} path="/Editpage" />
            <Route exact component={Addusers} path="/Addusers" />
            <Route exact component={AnnouncementSection} path="/AnnouncementSection" />
            <Route exact component={Dashboard} path="/dashboard" />
            <Route exact component={popupa} path="/popupa" />
            <Route exact component={searchpagetable} path="/searchpagetable" />
            <Route exact component={ParentProfileTable} path="/parentProfileTable" />
            <Route exact component={ParentAddressDetailsTable} path="/parentAddressDetailsTable" />
            <Route exact component={Advancesearchpage} path="/Advancesearchpage" />
            <Route exact component={StudentPersonalDetails} path="/studentPersonalDetails" />
            <Route exact component={StudentParentDetails} path="/studentParentDetails" />
            <Route exact component={SidenavPage} path="sidenavPage" />
            <Route exact component={StudentManagement} path="/StudentManagement" />
            <Route exact component={signup} path="/signup" />
            <Route exact component={Forgotpassword} path="/Forgotpassword" /> 
            <Route exact component={ViewAllUsers} path="/ViewAllUsers" />
            <Route exact component={clustersetup} path="/clustersetup" />
            <Route exact component={Login} path="/" />
            </Switch>
        </Router>
        
    )
}