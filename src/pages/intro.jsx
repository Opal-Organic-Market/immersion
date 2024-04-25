import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/images/intrologo.jpg';
import { Link } from 'react-router-dom';
import Allons from '../components/Allons';


const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      margin: '0 auto'
    },
    minHeight: '100vh',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textbox: {
    width: 342,
    height: 64,
    font: 'Droid Sans',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#013438',
  },
  logo: {
    width: 260,
    // height: 260,
  },
  text: {
    width: 342,
    // height: 18,//uncomment this
    font: 'Droid Sans',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '17.5px',
    textAlign: 'center',
    color: '#013438',
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img src={Logo} alt="logo" className={classes.logo} />
      <Typography className={classes.textbox}>
        Digitalisons le terroir au service de toutes les tables
      </Typography>
      <br></br>
      <Link to="/onboarding1">
      <Allons/>
      </Link>
      <Typography className={classes.text}>
        Avez-vous déjà un compte ?
      </Typography>
    
      
      
    </div>
  );
}