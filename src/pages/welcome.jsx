import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CommençonsLesAchats from "../components/CommençonsLesAchats";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  layout: {
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
    [theme.breakpoints.up('md')]: {
      width: "70%",
      margin: "0 auto"
    },
    height: "844px",
    color: "#FFFFFF",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "342px",
    height: "110px",
    top: "312px",
    left: "24px",
    gap: "16px",
  },
  productname: {
    fontFamily: "Droid Sans",
    width: "342px",
    height: "46px",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "46px",
    textAlign: "center",
    color: "black",
  },
  productdescription: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "center",
    color: "black",
  },
}));

export default function Welcome() {
  const styles = useStyles();

  return (
    <div className={styles.layout}>
      <Typography className={styles.productname}>Bienvenue!</Typography>
      <Typography className={styles.productdescription}>
        Inscription réussie ! Préparez-vous à choisir les meilleures
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/accueilTypedeviandeLivraison">
        <CommençonsLesAchats />
      </Link>
    </div>
  );
}
