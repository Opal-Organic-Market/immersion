import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import SearchBar from "../components/SearchBar";
import Enroute from "../components/Enroute";
import Enroute2 from "../components/Enroute2";


const useStyles = makeStyles((theme) => ({
  topography: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto",
    },
    fontFamily: "Droid Sans",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "left",
  },
  layout: {
    width: "20vh",
    height: "4vh",
    padding: "4px 8px 4px 8px",
    gap: "10px",
    // borderRadius: "100px 0px 0px 0px",
    backgroundColor: "#FFE393",
    color: "#000000", // Set text color to black
    border: "none",
    cursor: "pointer",
    outline: "none",
},
}));

export default function Livraison() {
  const styles = useStyles();

  return (
    <>
      <h3 className={styles.topography}>Commandes</h3>
      <br></br>
      <SearchBar />
      <br></br>
      <Typography>Les 3 derniers mois</Typography>
      <br></br>
      <Enroute />
      <br></br>
      <button className={styles.layout}>ARRIVE MARDI</button>
      <br></br>
      <br></br>
      <Enroute2 />
      <br></br>
      <Enroute2 />
    </>
  );
}
