import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'
import '../App.css'

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
    width: '342px',
    height: '48px',
    borderRadius: '32px',
  },
  label: {
    width: '100%', // set width to 100%
    height: '100%', // set height to 100%
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '125%',
    textAlign: 'center',
    textTransform: 'none'
  },
});

export default function Allons() {
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
      background: '#013438',
      color: '#FFFFFF',
    },
    hover: {
      background: '#025A60',
      color: '#FFFFFF',
    },
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyles[buttonState]}
      >
        <span className={classes.label} style={{color: buttonStyles[buttonState].color, width: buttonStyles[buttonState].width, height: buttonStyles[buttonState].height}}>Allons-y</span>
      </Button>
    </div>
  );
}
