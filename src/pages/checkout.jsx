import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Momologo from "../assets/images/momologo.png";
import { Typography, Box } from "@material-ui/core";
import Modifier from "../components/Modifier";
import PayerMaintenant from "../components/PayerMaintenant";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto",
    },
    height: "844px",
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
    padding: "30px",
  },
  paymentHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1), 
// Adjust margin as needed
  },
  paymentTitle: {
    fontFamily: "Droid Sans",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25px",
    textAlign: "left",
    color: "#045E98",
    marginLeft: theme.spacing(14), // Add margin between ArrowBack and text
  },
  // Additional style for Modifier and Method de paiement
  methodAndModifierContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2), // Adjust margin as needed
  },
  momologo: {
    width: "267px",
    height: "189px",
    borderRadius: "18px 0px 0px 0px",
  },
  address: {
    fontFamily: "Droid Sans",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25px",
    textAlign: "left",
  },
  hotel: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "left",
  },
  bp: {
    width: "342px",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
  },
  code: {
    fontamFily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px",
    textAlign: "left",
    color: "#8B8B8B",
  },
  livre: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "14px",
    textAlign: "left",
  },
  fcfa: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "right",
    color: "#CF1B26",
  },
  total: {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "left",
  },
  fcc: {
    fontFamily: "Droid Sans",
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "28px",
    textAlign: "right",

  }
}));

export default function Checkout() {
  const stlyes = useStyles();
  return (
    <div className={stlyes.page}>
      <Box className={stlyes.paymentHeader}>
        <br></br>
        <br></br>
        <br></br>
        <ArrowBack />
        <Typography className={stlyes.paymentTitle}>Paiement</Typography>
      </Box>
      {/* Container for Modifier and Method de paiement */}
      <Box className={stlyes.methodAndModifierContainer}>
        <Typography className={stlyes.payment}>Méthode de paiement</Typography>
        <Modifier />
      </Box>
      <br></br>
      <img className={stlyes.momologo} src={Momologo} alt="" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={stlyes.address}>Adresse</Typography>
      <Modifier />
      <Typography className={stlyes.hotel}>Hotel Bano Palace</Typography>
      <br></br>
      <Typography className={stlyes.bp}>
        BP 353, Tsinga Yaoundé, Cameroun
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={stlyes.code}>Code Promo</Typography>
      <br></br>
      <br></br>
      <Typography className={stlyes.livre}>Livraison</Typography>
      <Typography className={stlyes.fcfa}>1 500 FCFA</Typography>
      <Typography className={stlyes.total}>Total</Typography>
      <Typography className={stlyes.fcc}>33 000 FCFA</Typography>
      <br></br>
      <br></br>
      <Link to="/confirmation">
        <PayerMaintenant />
      </Link>
    </div>
  );
}
