import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 24px',
    width: '230px',
    height: '42px',
    borderRadius: '32px',
  },
  label: {
    width: '44px',
    height: '20px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#045E98',
    textTransform: 'none'
  },
});

export default function Payer() {
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
      background: '#CDDFEB',
    },
    hover: {
      background: '#94C4E4',
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
      <span className={classes.label}>Payer</span>
    </Button>
  );
}
