import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '80%', // Set width to 90%
    margin: 'auto', // Center the container
    height: '94px',
    background: '#CDDFEB',
    borderRadius: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '80%', // Set width to 90% for larger screens
    },
  },
  image: {
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%', // Use relative units
    height: 'auto', // Let the browser set the height based on the image aspect ratio
    objectFit: 'contain',
    top: 9,
    left: 21,
    gap: 0,
    borderRadius: 4,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '200%', // Use max-width to limit the size on larger screens
      maxHeight: '150%', // Use max-height to limit the size on larger screens
    },
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '12px 16px 12px 10px', // Added padding to the right
    gap: 8,
    width: '60%',
    height: 94,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      width: 230,
    },
  },
  productName: {
    paddingTop: '10px', // Added paddingTop here
    width: '100%',
    height: 20,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '125%',
    color: '#3A3A3A',
  },
  currentPrice: {
    width: '100%',
    height: 18,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '125%',
    color: '#FFFFFF',
    opacity: 0.9,
  },
  arrivalInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    width: '100%',
    height: 16,
  },
  currentPrice2: {
    width: '100%',
    height: 15,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '125%',
    color: '#9CDD51',
    opacity: 0.9,
  },
  checkCircle: {
    width: 16,
    height: 16,
    color: '#51B960',
  },
}));

const Enroute2 = ({ imageUrl, productName, price }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.container}>
      <img src={imageUrl} alt={productName} className={classes.image} style={{width: isSmallScreen ? '40%' : '40%', height: 'auto'}}/>
      <div className={classes.productInfo}>
        <span className={classes.productName}>{productName}</span>
        <span className={classes.currentPrice}>{price}</span>
        <div className={classes.arrivalInfo}>
          <span className={classes.currentPrice2}>Livre lundi <CheckCircleIcon className={classes.checkCircle} /></span>
          
        </div>
      </div>
    </div>
  );
};

export default Enroute2;
