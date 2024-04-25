import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Continuer from "../components/Continuer";

const useStyles = makeStyles((theme) => ({
    page: {
      width: "318.78px",
      height: "491.78px",
      top: "32px",
      left: "36px",
      gap: "0px",
      padding: "36px",
    },
    super: {
      fontFamily: "Droid Sans",
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "50px",
      textAlign: "center",
    },
    votre: {
       fontFamily: "Droid Sans",
       fontSize: "16px",
       fontWeight: "400",
       lineHeight: "24px",
       textAlign: "center",
       color: "#000000BF",
    },

}))

export default function Confirmation() {
    const styles = useStyles ();
  return (
    <div className={styles.page}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={styles.super}>Super !</Typography>
      <br></br>
      <br></br>
      <Typography>
        Votre commande a été passée et vous recevrez bientôt une confirmation
        d'expédition.
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <Continuer />
    </div>
  );
}
