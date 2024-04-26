import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import { useSpring, animated } from 'react-spring';
import '../index.css'

const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    gap: '8px',
    width: '166.9px',
    height: '307.19px',
    left: '199.1px',
    top: '0px',
    border: '1px solid #F6F6F6',
    borderRadius: '10px',
    position: 'relative', // Add this line
  },
  expandIcon: {
    position: 'absolute', // Uncomment this line
    top: '12px',
    right: '12px',
    width: '24px',
    height: '24px',
    borderRadius: '100px',
    background: '#9CDD51',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  default: {
    background: '#CDDFEB',
    color: '#045E98',
  },
  added: {
    background: '#9CDD51',
    color: '#FFFFFF',
  },
  button: {
    width: '100%',
    height: 35,
    borderRadius: 24,
    padding: '14px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Change this line
    alignItems: 'center',
    gap: 12,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: '20px',
    textAlign: 'center',
    marginTop: 'auto',
    textTransform: 'none !important'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    // objectFit: 'contain', // Add this line
  },
});

const PartsCard = ({ imageUrl, productName, onClick }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState('default');

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    console.log('Clicked')
    if (state === 'default') {
      setState('added');
      setTimeout(() => setState('added'), 1);
    } else {
      setState('default');
    }
  };

  let buttonClass;
  let endIcon;

  switch (state) {
    case 'added':
      buttonClass = classes.added;
      endIcon = <CheckIcon />;
      break;
    default:
      buttonClass = classes.default;
  }
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <div className={classes.container}>
      
      <div className={classes.imageContainer}>
      <IconButton className={classes.expandIcon} onClick={handleExpandClick}>
        <ExpandMoreIcon style={{ transform: isExpanded ? "rotate(180deg)" : "none" }} />
      </IconButton>
      
        {imageUrl && <img src={imageUrl} alt={productName} className={classes.image}/>}
      </div>
      <animated.div style={props}>
        <Button onClick={onClick} className={`${classes.button} ${buttonClass}`} endIcon={endIcon}>
          {productName}
        </Button>
      </animated.div>
    </div>
  );
};

export default PartsCard;
