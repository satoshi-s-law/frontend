import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Montserrat', sans-serif",
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    background: '#808080',
    color: '#808080',
    position: 'fixed',
    "&$selected": {
      color: '#808080',
      // color: '#eebf7a'
    },
  },
  selected: {}
})

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels={true}
      className={classes.root}
    >
      <BottomNavigationAction 
        label="Timer" 
        icon={<i className="fas fa-clock"></i>} />
      <BottomNavigationAction 
        label="Archives" 
        icon={<i className="fas fa-list-ul"></i>} />
      <BottomNavigationAction 
        label="Account" 
        icon={<i className="fas fa-user-friends"></i>} />
      <BottomNavigationAction 
        label="Settings" 
        icon={<i className="fas fa-cog"></i>} />
    </BottomNavigation>
  );
}