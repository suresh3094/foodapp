import React from 'react';
import Sidebar from './Sidebar';
import  './SidebarStyle.css';


export default function SidebarPage() {
  return (
    <div className="SidebarPage" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  );
}

