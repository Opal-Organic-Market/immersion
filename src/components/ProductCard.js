import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css'



const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    gap: '8px',
    position: 'absolute',
    width: '166.9px',
    height: '307.19px',
    left: '24px',
    top: '323.19px',
    border: 'none',
    borderRadius: '10px'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    width: '142.9px',
    height: '216.19px',
    borderRadius: '8px',
    border: 'none'
  },
  image: {
    width: '142.9px',
    height: '216.19px'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '8px',
    gap: '4px',
    width: '90%',
    height: '35px',
    borderRadius: '24px',
  },
  productName: {
    width: '131px',
    height: '19px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '125%',
    textAlign: 'center',
    textTransform: 'none !important'
  }
});

const ProductCard = ({ imageUrl, productName }) => {
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
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={productName} className={classes.image}/>
      </div>
      <Button
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={buttonStyles[buttonState]}
      >
        <span className={classes.productName} style={{color: buttonStyles[buttonState].color}}>
          {productName}
        </span>
      </Button>
    </div>
  );
};

export default ProductCard;
