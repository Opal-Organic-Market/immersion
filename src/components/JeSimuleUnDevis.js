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
    fontFamily: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    textAlign: 'center',
    width: '140px',
    height: '20px',
  },
});

export default function JeSimuleUnDevis() {
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
      textTransform: 'none',
    },
    hover: {
      background: '#025A60',
      color: '#FFFFFF',
      textTransform: 'none',
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
        <span className={classes.label}>Je simule un devis</span>
      </Button>
    </div>
  );
}