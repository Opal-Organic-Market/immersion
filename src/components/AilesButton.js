import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import { useSpring, animated } from 'react-spring';
import '../index.css'
import '../App.css'

const useStyles = makeStyles({
  default: {
    background: '#CDDFEB',
    color: '#045E98',
  },
  added: {
    background: '#9CDD51',
    color: '#FFFFFF',
  },
  button: {
    width: 134,
    height: 35,
    borderRadius: 24,
    padding: '14px 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: '20px',
    textAlign: 'center',
    textTransform: 'none'
  },
});

const AilesButton = (name) => {
  const classes = useStyles();
  const [state, setState] = useState('default');

  let buttonClass;
  let endIcon;

  const props = useSpring({
    opacity: 1, // Changed opacity to 1 for all states
    delay: state === 'added' ? 1 : 0,
    config: {
      duration: 300,
      easing: t => t,
    },
  });

  const handleClick = () => {
    if (state === 'default') {
      setState('added');
      setTimeout(() => setState('added'), 1); // Delay the transition to 'added' state by 1ms
    } else {
      setState('default');
    }
  };

  switch (state) {
    case 'added':
      buttonClass = classes.added;
      endIcon = <CheckIcon />;
      break;
    default:
      buttonClass = classes.default;
  }


  return (
    <animated.div style={props}>
      <Button onClick={handleClick} className={`${classes.button} ${buttonClass}`} endIcon={endIcon}>
       {name.children}
      </Button>
    </animated.div>
  );
};

export default AilesButton;
