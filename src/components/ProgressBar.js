import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    width: '342px',
    height: '31px',
  },
  frame: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    width: '103.33px',
    height: '31px',
  },
  text: {
    width: '103.33px',
    height: '16px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    color: '#013438',
  },
  bar: {
    width: '103.33px',
    height: '7px',
    borderRadius: '4px',
    background: '#E6E6E6', // Always use the primary color
   
  },
}));

const Step = ({ label }) => { // Removed 'active' prop as it's no longer needed
  const classes = useStyles();
  return (
    <div className={classes.frame}>
      <div className={classes.text}>{label}</div>
      <div className={classes.bar}></div>
    </div>
  );
};

const ProgressBar = ({ activeStep }) => {
  const classes = useStyles();
  const steps = ['Commande', 'Empaquetage', 'Livraison'];

  return (
    <div className={classes.container}>
      {steps.map((step, index) => (
        <Step key={index} label={step} /> // Removed 'active' prop as it's no longer needed
      ))}
    </div>
  );
};

export default ProgressBar;
