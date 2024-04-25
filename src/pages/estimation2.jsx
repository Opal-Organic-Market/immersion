import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import QuantitySelector from "../components/QuantitySelector";
import Poulet from "../assets/images/Poulet.jpg";
import Poulet2 from "../assets/images/poulet2.png";
import Payer from "../components/Payer";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0 20px",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto",
    },
    minHeight: "100vh",
    padding: "20px 20px", // Add padding to the entire page
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  contentfirst: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
  },
  content: {
    fontFamily: "Droid Sans",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "left",
    color: "#045E98",
  },
  layout: {
    width: "70px",
    height: "70px",
    borderRadius: "4px 0px 0px 0px",
    float: "left",
    marginRight: "10px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  contentmain: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    textAlign: "left",
  },
  cout: {
    fontFamily: "Droid Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    textAlign: "left",
  },
  cefa: {
    fontFamily: "Droid Sans",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "17.5px",
    textAlign: "right",
    color: "#CF1B26",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px", // Add margin top for spacing
  },
  cefav: {
    fontFamily: "Droid Sans",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    textAlign: "left",
    color: "#013438",
  },
  payerContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
}));

export default function Estimation1() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      {" "}
      {/* Add padding to the entire page */}
      <br></br>
      <br></br>
      <Link to="/estimation1">
        <ArrowBack />
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={styles.contentfirst}>
        J’estime mes coûts.
      </Typography>
      <br></br>
      <Typography className={styles.content}>
        Quelle quantité voulez-vous ?
      </Typography>
      <br></br>
      <div className={styles.container}>
        <img className={styles.layout} src={Poulet} alt="Boeuf" />
        <div>
          <Typography className={styles.contentmain}>
            Pilon de poulet
          </Typography>
          <div className={styles.container}>
            <QuantitySelector />
            <Typography className={styles.cefa}>17 500 FCFA</Typography>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <div className={styles.container}>
          <img className={styles.layout} src={Poulet2} alt="Boeuf" />
          <div>
            <Typography className={styles.contentmain}>
              Haut des cuisses
            </Typography>
            <div className={styles.container}>
              <QuantitySelector />
              <Typography className={styles.cefa}>14 000 FCFA</Typography>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <Typography className={styles.cout}>Coût Total</Typography>
      <div className={styles.priceContainer}>
        <Typography className={styles.cefav}>31 500 Fcfa</Typography>
        <div className={styles.payerContainer}>
          <Link to="/estimation3">
            <Payer className={styles.payer} />
          </Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
