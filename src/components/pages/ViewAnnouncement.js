import React, { useEffect } from "react";
import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from "@material-ui/core";
import { getActiveElement } from "formik";
import axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



export default function ViewAnnouncement() {
  const [data, setTable] = useState([]);
  const [del, setDel] = useState([]);
  //const [id,setId]=  React.useState('')
  const [view,setView] = useState();
    

  
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
     
    }
    axios
    
      .get("http://35.192.144.246:8085/viewallannouncement")
      .then((res) => {
        console.log("res", res);
        setTable(res.data.data);
        console.log("data", res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.warn("result", data);
  
 
 
  const deleteClick = (id) => {
    axios
      .delete("http://35.192.144.246:8085/delete/" +id)
      .then((res) => {
        console.log("res", res);
        setDel(res.del);
        console.log("data", res.del);
        alert("Items deleted successfully")
      })
      .catch((err) => console.log(err));
  }
 
  const editClick = () =>{
    history.push("/Editannouncement");
  }

  // const viewClick = () =>{
  //   history.push("/Announceviewbyid");
  // }


  const viewClick = (id) => {
    let view ={
      id:"",
      title:"",
      announcement:""

    }
    axios
          .get("http://localhost:8085/view-announcement/" +id)
          
      .then((res) => {
        console.log("res", res);
        console.log("view announcement",res.data.data);
        setView(res.data.data);
        console.log(setView);
        
        console.log("view id by announcement",res.data.data);
        //console.log("view announcement",setView)
        history.push("/Announceviewbyid");
        
      })
      .catch((err) => console.log(err));
  }
  


 
  return (
    <div>
      
      <h3>View All Announcement</h3>

      {/* <button onClick={viewall}>View</button> */}

      
      <TableContainer>
        <Table style={{ border: "2px solid black" }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Announcement</TableCell>
              
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.title}</TableCell>
                  <TableCell>{d.announcement}</TableCell>
                  
                  <TableCell>
                  <VisibilityIcon onClick={() => viewClick(d.id)} style={{color:"blue"}} />
                    {"  "}
                    <EditIcon onClick={() => editClick(d.id)} style={{color:"orange"}} />
                    {"  "}
                    <DeleteIcon  onClick={() =>deleteClick(d.id)}style={{color:"red"}} />
                    {"  "}
                   
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          
          
        </Table>
      </TableContainer>
      </div>
    
  );
}