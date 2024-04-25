import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MenuIcon from '@material-ui/icons/Menu';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
  root: {
    width: '100%',
    borderTop: '1px solid #EAEAEA',
    background: '#FFFFFF',
  },
  selected: {
    color: '#1F2223 !important',
  },
  icon: {
    width: (props) => props.iconSize,
    height: (props) => props.iconSize,
  },
  label: {
    fontSize: (props) => props.labelSize,
  },
}));

export default function BottomNav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles({
    iconSize: matches ? '24px' : '20px',
    labelSize: matches ? '14px' : '10px',
  });

  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.container}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Accueil"
          icon={<HomeIcon className={classes.icon} />}
          classes={{ selected: classes.selected, label: classes.label }}
        />
        <BottomNavigationAction
          label="Historique"
          icon={<DateRangeIcon className={classes.icon} />}
          classes={{ selected: classes.selected, label: classes.label }}
        />
        <BottomNavigationAction
          label="Menu"
          icon={<MenuIcon className={classes.icon} />}
          classes={{ selected: classes.selected, label: classes.label }}
        />
      </BottomNavigation>
    </div>
  );
}
