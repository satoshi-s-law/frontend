import React from 'react';
import { makeStyles } from '@material-ui/styles';
import playcircleoutline from './playcircleoutline.png';
import addButton from './addbutton.png'
const useStyles = makeStyles({
  projectListContainer: {
    background: '#000',
    height: '800px',
    paddingTop:'1px',
    display: 'flex',
    flexDirection: 'column'
  },
  projectname: {
    color: '#E0E0E0',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.6rem',
    lineHeight: '2.0rem',
    /* identical to box height */
  },
  clientname: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.4rem',
    lineHeight: '17px',
    /* identical to box height */
    color: ' #FFE0B2',
  },
  projectcontainer: {
    background: '#212121',
    margin: '4px 0',
    padding: '12px 16px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  timecontainer: {
    display: 'flex',
    alignContent: 'center',
    padding: '10px',
    alignItems: 'center',
    alignContent: 'center',
  },
  timetracker: {
    color: '#FFFFE0B2',
    /* width: 70px; */
    border: '1px solid #FFFFE0B2',
    margin: 'auto 0',
    padding: '4px 8px',
    textAlign: 'center',
    marginRight: '8px',
    borderRadius: '11px',
    boxSizing: 'border-box'
  },
  actionButton: {
    color: '#A5A5A5',
    width: '25px',
    height: '25px',
  },
  addNewTask: {
 
    borderRadius:' 50%',
    width:' 70px',
    height: '70px',
    
    
    textAlign: 'center',
   
    backgroundImage: 'linear-gradient(175deg,#85E1D7 , #167268 , #167268 )',
    color: 'red',
    bottom: '4.75em',
    right: '1em',
    position: 'fixed',
  
  }

});

export default function ProjectList() {
  const classes = useStyles();
  return (
    <div className={classes.projectListContainer}>
   
      <p style={{
        color: '#9F9F9F',
        fontSize: '1.2rem',
        margin: '3px 6px',
        padding: '10px',
      }}
      >
      Current Projects</p>
      <div className={classes.projectcontainer}>

        <div>
          <p className={classes.projectname}> Project Name</p>
          <p className={classes.clientname}>Client Name</p>
        </div>
        <div className={classes.timecontainer}>
          <p className={classes.timetracker}>00:00 hrs</p>
          <img src={playcircleoutline} alt="src-images" className={classes.actionButton} />
        </div>

      </div>

      <div className={classes.projectcontainer}>
        <div>
          <p className={classes.projectname}> Project Name</p>
          <p className={classes.clientname}>Client Name</p>
        </div>
        <div className={classes.timecontainer}>
          <p className={classes.timetracker}>00:00 hrs</p>
          <img src={playcircleoutline} alt="src-images" className={classes.actionButton} />
        </div>
      </div>
      <button className={classes.addNewTask}><img src={addButton} style={{width: '25px;', height: '25px'}}/></button>
   
    </div>
  );
}
