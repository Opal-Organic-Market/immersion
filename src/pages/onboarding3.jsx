import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Porc from "../assets/images/Porc.png";
import Continuer from "../components/Continuer";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '700%',
      margin: '0 auto'
    },
    minheight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  porc: {
    width: 278,
    height: 278,
  },
  productname: {
    width: 342,
    height: 80,
    fontWeight: 700,
    font: 'Droid Sans',
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#013438',
  },
  text: {
    width: 342,
    height: 72,
    font: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#797A7B',
  },
}));

export default function Onboarding3() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={Porc} alt="logo" className={classes.porc} />
      <br></br>
      <Typography className={classes.productname}>
        Livraison et service après vente
      </Typography>
      <br></br>
      <Typography className={classes.text}>
        Nous prenons soin de vous ! Service de livraison fiable et efficient et
        service après vente à l'écoute
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/Welcome">
        <Continuer />
      </Link>
    </div>
  );
}
