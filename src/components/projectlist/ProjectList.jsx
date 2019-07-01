import React from "react";
import { styled } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import playcircleoutline from "./playcircleoutline.png"
const useStyles = makeStyles({
  projectListContainer: {
    background: '#000',
    height: "800px"
    
  },
  projectname: {
    color: "#E0E0E0",
    
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.6rem",
    lineHeight: "2.0rem"
    /* identical to box height */
  },
  clientname: {
    /* Client Name */
    

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.4rem",
    lineHeight: "17px",
    /* identical to box height */
    color: " #FFE0B2"
  },
  projectcontainer : {
    background: "#212121",
    margin: '3px 0',
    padding:'10px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  timecontainer: {
    display: 'flex',
    alignContent: 'center',
    padding: '10px', 
    alignItems: 'center',
    alignContent: 'center'
  },
  timetracker: {
    border: '1px solid #FFFFE0B2',
    borderRadius: '11px',
    width: '70px',
    padding: '5px',
    textAlign: 'center',
    margin: 'auto 0',
    color: '#FFFFE0B2',
    marginRight: "32px"
  },
  actionButton: {
      color:'#A5A5A5',
      width: '25px',
      height: '25px'
  }

});

export default function ProjectList() {
  const classes = useStyles();
  return (
    <div className={classes.projectListContainer}>
      <p style={{color: '#9F9F9F', fontSize: '1.2rem', margin: '3px 0',
    padding:'10px'}}>Current Projects</p>
      <div className={classes.projectcontainer}>
        <div>
        <p className={classes.projectname}> Project Name</p>
        <p className={classes.clientname}>Client Name</p>
        </div>
        <div className={classes.timecontainer}>
        <p className={classes.timetracker}>00:00 hrs</p>
        <img src={playcircleoutline} className={classes.actionButton}/>
        </div>
       
      </div>

      <div className={classes.projectcontainer}>
      <div>
        <p className={classes.projectname}> Project Name</p>
        <p className={classes.clientname}>Client Name</p>
        </div>
        <div className={classes.timecontainer}>
        <p className={classes.timetracker}>00:00 hrs</p>
        <img src={playcircleoutline} className={classes.actionButton}/>

        </div>
      </div>
    </div>
  );
}
