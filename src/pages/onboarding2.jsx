import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Boeuf from "../assets/images/Boeuf.png";
import { Link } from 'react-router-dom';
import Suivant from "../components/Suivant";




const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: '0 auto'
    },
    minheight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto', // Center the page horizontally

   
  },
  boeuf: {
    width: '278',
    height: 278,

  },
  productname: {
    width: '342',
    height: '80',
    fontWeight: '700',
    font: 'Droid Sans',
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#013438',
  },
  productdescription: {
    width: '342',
    height: '72',
    font: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#797A7B',
  },
}));

export default function Onboaring2() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={Boeuf} alt="Boeuf" className={classes.boeuf} />
      <br></br>
      <Typography className={classes.productname}>
        Commandes sur mesure.
      </Typography>
      <br></br>
      <br></br>
      <Typography className={classes.productdescription}>
        Aurevoir la calculette ! Donnez-nous le nombre de consommateurs de nos
        produits et l’appli fera une estimation du coût pour vous.
      </Typography>
      <br></br>
      <br></br>
      <Link to="/Onboarding3">
        <Suivant />
      </Link>
    </div>
  );
}
