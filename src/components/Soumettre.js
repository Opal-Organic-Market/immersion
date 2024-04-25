import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'
import '../App.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    gap: '8px 24px 8px 24px',
    width: '120px',
    height: '42px',
    borderRadius: '32px',
  },
  label: {
    width: '83px',
    height: '20px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    textTransform: 'none !important',
    textDecorationLine: 'none !important',
    '& *': {
      textDecoration: 'none',
    },
  },
});

export default function Soumettre() {
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
      background: '#CDDFEB',
      color: '#045E98',
    },
    hover: {
      background: '#94C4E4',
      color: '#045E98',
    },
    click: {
      background: '#046A72',
      color: '#FFFFFF',
    },
  };

  return (
    <Button
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyles[buttonState]}
      disableRipple
    >
      <span className={classes.label} style={{color: buttonStyles[buttonState].color}}>Soumettre</span>
    </Button>
  );
}
