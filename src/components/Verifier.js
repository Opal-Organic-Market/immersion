import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';
import '../index.css'

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 8px',
    gap: '8px',
    width: '86px',
    height: '36px',
    border: '1px solid #363939',
    borderRadius: '4px',
  },
  label: {
    width: '46px',
    height: '18px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '125%',
    textAlign: 'center',
    color: '#363939',
  },
  icon: {
    width: '16px',
    height: '16px',
  },
});

export default function Verifier() {
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
      background: '#E2EEF7',
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
      <TuneIcon className={classes.icon} />
      <span className={classes.label}>Vérifier</span>
    </Button>
  );
}
