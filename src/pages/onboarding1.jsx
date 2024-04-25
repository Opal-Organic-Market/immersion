import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Poulet from "../assets/images/Poulet.jpg";
import Suivant from "../components/Suivant";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 20px", // Add padding to the sides
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto",
      paddingLeft: "20px", // Add padding to the left side
    },
    minHeight: "100vh", // 'minHeight' instead of 'minheight'
    display: "flex",
    flexDirection: "column",                                                   
    justifyContent: "flex-start", 
    alignItems: "flex-start", // Align content to the left
  },
  boeuf: {
    width: "278px", 
    height: "278px", 
  },
  productname: {
    width: "342px", 
    height: "80px", 
    fontWeight: "700",
    fontFamily: "Droid Sans", // Correct property name
    fontSize: "32px",
    lineHeight: "40px",
    textWrap: "balance",
    color: "#013438",
  },
  productdescription: {
    width: "342px", // Add 'px' to specify the unit
    height: "72px", // Add 'px' to specify the unit
    fontFamily: "Droid Sans", // Correct property name
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    textWrap: "balance",
    color: "#797A7B",
  },
  header: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "17.5px",
    textAlign: "left",
    justifyContent: "left",
    marginRight: "20px", // Add margin to the left
    marginTop: "20px", // Add margin to the top
  },
}));

export default function Onboarding2() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      
      <br></br>
      <br></br>
      <br></br>
      <Typography className={classes.header}>Passer</Typography>
      <img src={Poulet} alt="Boeuf" className={classes.boeuf} />
      <br></br>
      <br></br>
      <Typography className={classes.productname}>
        Grands événements en approche ?
      </Typography>
      <br></br>
      <br></br>
      <Typography className={classes.productdescription}>
        Fini les tracas de dernière minute ! Passez vos commandes à l’avance
        pour des mariages, événements d’entreprises entre autres.
      </Typography>
      <br></br>
      <br></br>
      <Link to="/Onboarding2">
        <Suivant />
      </Link>
    </div>
  );
}
