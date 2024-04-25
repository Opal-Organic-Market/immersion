import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'; // import the icon
import '../index.css'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    gap: '8px',
    width: '170px',
    height: '44px',
    background: '#5C15F3',
    borderRadius: '4px',
  },
  label: {
    width: '110px',
    height: '14px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'none'
  },
  icon: {
    width: '20px',
    height: '20px',
  },
});

export default function GetStarted() {
  const classes = useStyles();
  const [buttonState, setButtonState] = useState('default');

  const handleMouseEnter = () => {
    setButtonState('hover');
  };

  const handleMouseLeave = () => {
    setButtonState('default');
  };

  const buttonStyles = {
    default: {
      background: '#5C15F3',
      color: '#FFFFFF',
    },
    hover: {
      background: '#5012D3',
      color: '#FFFFFF',
    },
    active: {
      background: '#3500A5',
      color: '#FFFFFF',
    },
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setButtonState('active')}
        onMouseUp={() => setButtonState('default')}
        style={buttonStyles[buttonState]}
      >
        <span className={classes.label}>Let's get started</span>
        <ArrowForwardIcon className={classes.icon} />
      </Button>
    </div>
  );
}
