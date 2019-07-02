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

const handleHourCount = (project) => {
  const morning = 'am';
  const evening = 'pm';
  const timeObject = {
    hourEnded: null,
    hourStarted: null,
  };
  console.log(project);
  if (project.timeEnd.includes(morning)) {
    if (parseInt(project.timeEnd.split(morning)[0]) !== 12) {
      timeObject.hourEnded = parseInt(project.timeEnd.split(morning)[0]);
    } else {
      timeObject.hourEnded = 0;
    }
  } else {
    timeObject.hourEnded = parseInt(project.timeEnd.split(evening)[0]) + 12;
  }
  if (project.timeStart.includes(morning)) {
    if (parseInt(project.timeStart.split(morning)[0]) !== 12) {
      timeObject.hourStarted = parseInt(project.timeStart.split(morning)[0]);
    } else {
      timeObject.hourStarted = 0;
    }
  } else if (parseInt(project.timeStart.split(evening)[0]) !== 12) {
    timeObject.hourStarted = parseInt(project.timeStart.split(evening)[0]) + 12;
  } else {
    timeObject.hourStarted = 12;
  }
  const totalHours = timeObject.hourEnded - timeObject.hourStarted;
  if (totalHours >= 0) {
    return totalHours;
  }
  return -1 * totalHours;
};

function ProjectList(props) {
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

      {props.projectList.map(project => (
        <div>
          <div className={classes.projectcontainer} onClick={() => props.history.push('/add-task')}>
            <div>
              {/* <!-- <<<<<<< ft-add-props-validation
            <p className={classes.projectname}>{project.projectName}</p>
            <p className={classes.clientname}>{project.clientName}</p>
          </div>
          <div className={classes.timecontainer}>
            <p className={classes.timetracker}>
              {handleHourCount(project) >= 10 ? handleHourCount : `0${handleHourCount(project)}`}
:00
            </p>
            <img src={playcircleoutline} alt="src-images" className={classes.actionButton} />
          </div>
        </div>
      ))}


      <button className={classes.addNewTask}>
        <Link to="/add-task">
          <img src={addButton} alt="add a new project" style={{ width: '25px', height: '25px' }} />
          {' '}
        </Link>
      </button>
======= --> */}
              <p className={classes.projectname}>{project.name}</p>
              <p className={classes.clientname}>{project.clientName}</p>
            </div>
            <div className={classes.timecontainer}>
              <p className={classes.timetracker}>
                {handleHourCount(project) >= 10 ? handleHourCount : `0${handleHourCount(project)}`}
:00
              </p>
              <img src={playcircleoutline} alt="src-images" className={classes.actionButton} />
            </div>
          </div>
          {/* ))} */}

        </div>
      ))}
    </div>
  );
}

export default withRouter(ProjectList);
