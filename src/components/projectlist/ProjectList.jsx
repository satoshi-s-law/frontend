import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link, withRouter } from 'react-router-dom';
import playcircleoutline from './playcircleoutline.png';
import addButton from './addbutton.png';

const useStyles = makeStyles({
  projectListContainer: {
    background: '#000',
    height: '700px',
    paddingTop: '1px',
    display: 'flex',
    flexDirection: 'column',
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
    // alignContent: 'center',
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
    boxSizing: 'border-box',
  },
  actionButton: {
    color: '#A5A5A5',
    width: '25px',
    height: '25px',
  },
  addNewTask: {
    borderRadius: ' 50%',
    width: ' 70px',
    height: '70px',


    textAlign: 'center',

    backgroundImage: 'linear-gradient(175deg,#85E1D7 , #167268 , #167268 )',
    color: 'red',
    bottom: '5.5em',
    right: '1em',
    position: 'fixed',

  },

});



export default function ProjectList(props) {
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
      Current Projects

      </p>
     

        <div>
         

        {props.projectList.map((project, i)=>{
        return ( 
          <Link to={{pathname: `/project/${i}`, state :{
            project: project,
          }}} key={i}>
          <div className={classes.projectcontainer} key={i}>
          <div>
          <p className={classes.projectname}>{project.projectName}</p>
          <p className={classes.clientname}>{project.clientName}</p>
        </div>
        <div className={classes.timecontainer}>
          <p className={classes.timetracker}>{project.duration >= 10 ? project.duration : '0' + project.duration}:00</p>
       <img src={playcircleoutline} alt="src-images" className={classes.actionButton} />
        </div>

      </div>
      </Link>
      )
        

        })}
        )
        </div>


        <button className={classes.addNewTask}><Link to="/add-task" ><img src={addButton} alt="add a new project" style={{ width: '25px', height: '25px' }} />   </Link></button>

    </div>
  );
}

