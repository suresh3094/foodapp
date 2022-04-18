import React, { useEffect } from "react";
import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from "@material-ui/core";
import { getActiveElement } from "formik";
import axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import popupa from '../pages/popupa';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import SidenavPage from '../pages/sidenavPage';
import TablePagination from '@material-ui/core/TablePagination';



export default function ViewAllUsers(props) {
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailid, setEmailid] = React.useState('')
  const [phonenumber, setPhonenumber] = React.useState('')
  const [id, setId] = React.useState('');
  const [active_flag, setActive_flag] = React.useState('')
  const [del, setDel] = useState();
  const [view,setView] = useState();


  const [data, seTableCellata] = useState([]);

  // pagination
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      // history.push("/Loginpage")
      // viewall();
    }
    axios
      .get("http://35.192.144.246:8085/viewallusers")
      .then((res) => {
        console.log("res", res);
        seTableCellata(res.data.data);
        console.log("data", res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.warn("result", data);
  // async function viewall() {
  //     console.warn(id,first_name, last_name, username,password,emailid,phonenumber,active_flag,createdAt,updatedAt)
  //     // let item = { first_name, last_name, username,password,emailid,phonenumber,active_flag,createdAt,updatedAt};
  //     let result = await fetch("http://localhost:8085/viewallusers", {
  //         meTableCellod: 'get',
  //     });
  //     console.log("result",result);
  //     result = await result;
  //     localStorage.setItem("user-info",(result))
  //     // history.push("/signup")
  //     // const message = result.statusMessage.description
  // }

  // const editClick = () =>{
  //   history.push("/Editpage");
  // }

  //filter
  const searchClick = (firstname) => {

    {
      axios
        // .get("http://35.192.144.246:8085/filter")
        .get("http://35.192.144.246:8085/filter")
        .then((res) => {
          console.log("res", res);
          setFirstname(res.data);
          console.log("data", res.data);
        })
        .catch((err) => console.log(err));
    }
    console.log("result", data);
  }


  //   async function searchClick() {
  //    //console.warn(id,firstname, lastname, username,password,emailid,phonenumber,active_flag);
  //     let item = {id, firstname, lastname, username,password,emailid,phonenumber,active_flag};
  //    let result = await fetch("http://35.192.144.246:8085/filter/", +firstname + lastname,
  //      {
  //         method: 'get',
  //         headers: {
  //             "content-Type": "application/json",
  //             "Accept": 'application/json',
  //             //"Authorization": 'apiKey'
  //         },
  //         body: JSON.stringify(item)
  //     });
  //     result = await result.json();
  //     localStorage.setItem("user-info",JSON.stringify(result))

  //     if(result.statusMessage.code == 200){
  //       console.log("succ", result.statusMessage.code)
  //       console.log(id,firstname, lastname, username,password,emailid,phonenumber,active_flag);
  //     }
  //     else 
  //     {
  //       console.log("error",result.statusMessage.code)
  //     }

  // }







  // const deleteclick = () => {
  //   {

  //     axios
  //       .delete("http://35.192.144.246:8085/user/delete/" +id)
  //       .then((res) => {
  //         console.log("res", res);
  //         setFirstname(res.data.data);
  //         console.log("data", res.data.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   console.warn("result", data);
  // }

  //delete function

  const deleteClick = (id) => {
    axios
      .delete("http://35.192.144.246:8085/user/delete/" + id)
      .then((res) => {
        console.log("res", res);
        setDel(res.del);
        console.log("data", res.del);
        alert("Items deleted successfully")
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  const viewClick = (id) => {
    let viewdata ={
      id:"",
      firstname:"",
      lastname:"",
      username:"",
      password:"",
      emailid:"",
      phonenumber:"",
      active_flag:"",


    }
    axios
      .get("http://35.192.144.246:8085/user/view/" + id)
      .then((res) => {
        console.log("res", res);
        console.log("view id by users",res.data.data);
        setView(res.data.data);
        console.log(setView);
        
        //console.log("view id by users",res.data.data);
        //console.log("view users",setView)
        history.push("/viewusers");
        
      })
      .catch((err) => console.log(err));
  }
  



  return (
    <div>
      <div>
        <SidenavPage />
      </div>


      <div style={{

        background: 'white',
        marginLeft: '64px'



      }}>

        <h3>View All Users</h3>

        {/* <button onClick={viewall}>View</button> */}

        <TextField
          placeholder='search'
          name="firstname"
          variant="outlined"
          size="small"
          type="text"
          label="search"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button onClick={searchClick}>Search</button>
        <br />
        <TableContainer>
          <Table style={{ border: "2px solid black" }}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>active_flag</TableCell>
                <TableCell>createdAt</TableCell>
                <TableCell>updatedAt</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.firstname}</TableCell>
                  <TableCell>{d.lastname}</TableCell>
                  <TableCell>{d.username}</TableCell>
                  <TableCell>{d.emailid}</TableCell>
                  <TableCell>{d.phonenumber}</TableCell>
                  <TableCell>{d.active_flag}</TableCell>
                  <TableCell>{d.createdAt}</TableCell>
                  <TableCell>{d.updatedAt}</TableCell>
                  {/* <TableCell>
                    <VisibilityIcon style={{color:"blue"}} />
                    {"  "}
                    <EditIcon onClick={() => editClick()} style={{color:"orange"}} />
                    {"  "}
                    <popupa />
                  </TableCell> */}
                  <TableCell>
                  <button onClick={()=>viewClick(d.id)}>view</button>
                    <br />
                    <button><a href={'/Editpage' }>Edit</a></button>
                    <br />

                    <button onClick={() => deleteClick(d.id)}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {data.map((d) => {
                      const value = row[d.id];
                      return (
                        <TableCell key={d.id} align={d.align}>
                          {d.format && typeof value === 'number' ? d.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}