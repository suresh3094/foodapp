import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import axios from 'axios';

//announcement
export default function AnnouncementSection() {
    const [view, setView] = useState([]);
    useEffect(() => {
        axios
          .get("http://35.192.144.246:8085/viewallannouncement")
          .then((res) => {
            console.log("res", res);
            setView(res.data.data);
            console.log("data", res.data.data);
          })
          .catch((err) => console.log(err));
      }, []);
      console.warn("result", view);
    return(
        <div
            style={{
            padding: "4px",
            width: "23em",
            background: "#fff",
            borderRadius: "4px",
            }}
        >
            <Typography
            style={{ textAlign: "center", fontWeight: "600" ,background:
                "linear-gradient(to right, rgb(119, 184, 248), rgb(255, 255, 255))"}}
            >
            {" "}
            Announcement
            </Typography>

            <div>
                {
					view.map((tex, i) => (
							<Paper
                            style={{
                                width: "20em",
                                padding: "9px",
                                marginLeft: "9px",
                                marginBottom: "10px",
                            }}
                             key={i.id}>
								<h5>{tex.title}</h5>
								<p>{tex.announcement}</p>	
							</Paper>
						))
				}
            </div>
            </div>
    );
}
       