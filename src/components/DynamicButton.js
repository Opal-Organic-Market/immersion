import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'
import '../App.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '8px',
    gap: '4px',
    width: '147px',
    height: '35px',
    borderRadius: '24px',
  },
  label: {
    width: '131px',
    height: '19px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '125%',
    textAlign: 'center',
  },
});

export default function DynamicButton({ name }) {
  const classes = useStyles();
  const [buttonState, setButtonState] = useState('default');

  const handleMouseEnter = () => {
    setButtonState('hover');
  };

  const handleMouseLeave = () => {
    setButtonState('default');
  };

  const handleClick = () => {
    setButtonState('click');
  };

  const buttonStyles = {
    default: {
      background: '#CF1B26',
      color: '#FFFFFF',
    },
    hover: {
      background: '#E73843',
      color: '#FFFFFF',
    },
    click: {
      background: '#CDDFEB',
      color: '#045E98',
    },
  };

  return (
    <Button
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyles[buttonState]}
    >
      <span className={classes.label} style={{color: buttonStyles[buttonState].color}}>{name}</span>
    </Button>
  );
}
