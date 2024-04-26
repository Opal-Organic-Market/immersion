import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import pouletthigh from "../assets/images/pouletthigh.png";
import poulet2 from "../assets/images/poulet2.png";
import poulet3 from "../assets/images/poulet3.png";
import AilesButton from "../components/AilesButton";
import Continuer from "../components/Continuer";
import { ArrowBack } from "@mui/icons-material";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down('md')]: {
      width: "100%"
    },
    [theme.breakpoints.up('lg')]: {
      width: "70%",
      margin: "o auto"
    },
    minheight: "100vh",
    background: "#FFFFFF",
    
  },
  contentfirst: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
    color: "#013438",
  },
  content: {
    fontFamily: "Droid Sans",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "left",
    color: "#045E98",
  },
  pouletthighContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(2), // Adjust the gap between grid items as needed
    justifyContent: "center", // Center the grid horizontally
    alignItems: "center", // Center the grid vertically
    marginTop: theme.spacing(2), // Add margin top to the grid container
  },
  pouletImage: {
    maxWidth: "100%", // Ensure images don't exceed container width
    height: "auto", // Maintain aspect ratio
  },
}));

export default function AccueilParties2() {
  const styles = useStyles();
  

  return (
    <Box className={styles.page} pb={8}>
      {" "}
      {/* Add padding to the bottom */}
      <br></br>
      <br></br>
      <Link to="/AccueilParties">
        <ArrowBack />
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={styles.contentfirst}>
        Je désire du Poulet.
      </Typography>
      <br></br>
      <Typography className={styles.content}>
        Quelle partie voulez-vous ?
      </Typography>
      <Container className={styles.pouletthighContainer}>
        <div>
          <img src={pouletthigh} alt="" className={styles.pouletImage} />
          <AilesButton />
          {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptas quis illum ea dignissimos, sequi deserunt repellat sunt enim</Typography> */}
        </div>
      
       
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/Estimation1">
        <Continuer />
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav />
    </Box>
  );
}
