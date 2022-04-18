import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory } from 'react-router-dom';
import { AiFillAppstore } from "react-icons/ai";
import { BsPeopleCircle, BsPeopleFill, BsPower, BsLayersFill, BsFillPersonPlusFill } from "react-icons/bs";


export default function Sidebar(props) {
    let history = useHistory();
    return (
        <Menu>
            <h4>Menu</h4>
            <a className="menu-item" href="/Dashboard"><AiFillAppstore />  Hotel</a>
            <a className="menu-item" href="/StudentManagement"><BsPeopleCircle />  Items</a>
            <a className="menu-item" href="/ViewAllUsers"><BsPeopleFill />  Orders</a>
            <a className="menu-item" href="/Login"><BsPower /> City</a>
        </Menu>
    );
};