import React from 'react';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { AiFillAppstore } from "react-icons/ai";
import { BsPeopleCircle, BsPeopleFill, BsPower, BsLayersFill, BsFillPersonPlusFill } from "react-icons/bs";
import {useHistory} from 'react-router-dom';




export default function SidenavPage() {
    let history = useHistory();
  const SideNav1 = () => {
    
    history.push("/StudentManagement")
  }
    return (
        <div>

            <div className="mt">
                <SideNav>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home" style={{ backgroundColor: "black" }}>
                        
                         <NavItem eventKey="StudentManagement" onSelect={() => SideNav1()}>

                            <NavIcon>
                                <i style={{ fontSize: '1.75em' }}><b><AiFillAppstore /></b></i>
                            </NavIcon>

                            <NavText>
                                <b>Student Management</b>
                            </NavText>

                        </NavItem>
                        <NavItem>
                        {/* <NavItem eventKey="profile" onSelect={(profile) => {
                            this.props.history.push("/profile")
                        }}> */}
                            <NavIcon>
                                <i style={{ fontSize: '1.75em' }}><b><BsPeopleCircle /></b></i>
                            </NavIcon>
                            <NavText>
                                <b>Profile</b>
                            </NavText>
                        </NavItem>
                        <NavItem>
                        {/* <NavItem eventKey="usermanagement" onSelect={(usermanagement) => {
                            this.props.history.push("/usermanagement")
                        }}> */}
                            <NavIcon>
                                <i style={{ fontSize: '1.75em' }}><b><BsPeopleFill /></b></i>
                            </NavIcon>
                            <NavText>
                                <b>User Management</b>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="generatebuild">
                            <NavIcon>
                                <i style={{ fontSize: '1.75em' }}><b><BsLayersFill /></b></i>
                            </NavIcon>
                            <NavText>
                                <b>Generate Build</b>
                            </NavText>
                        </NavItem>
                        <NavItem>
                        {/* <NavItem eventKey="logout" onSelect={(logout) => {
                            this.props.history.push("/login")
                        }}> */}

                            <NavIcon>
                                <i style={{ fontSize: '1.75em' }}><b><BsPower /></b></i>
                            </NavIcon>
                            <NavText>
                                <b>Logout</b>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>

        </div>

    )

}


