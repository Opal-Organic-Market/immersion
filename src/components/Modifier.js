import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px 16px',
    width: '86px',
    height: '36px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  },
  label: {
    width: '54px',
    height: '20px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#252425',
    textTransform: "none"
  },
});

export default function Modifier() {
  const classes = useStyles();
  const [buttonState, setButtonState] = useState('default');

  const handleMouseEnter = () => {
    setButtonState('hover');
  };

  const handleMouseLeave = () => {
    setButtonState('default');
  };

  const handleMouseDown = () => {
    setButtonState('active');
  };

  const handleMouseUp = () => {
    setButtonState('default');
  };

  const buttonStyles = {
    default: {
      background: '#FFFFFF',
    },
    hover: {
      background: '#CDDFEB',
    },
    active: {
      background: '#3500A5',
    },
  };

  return (
    <Button
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={buttonStyles[buttonState]}
    >
      <span className={classes.label}>Modifier</span>
    </Button>
  );
}
