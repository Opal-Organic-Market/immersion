import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import pouletthigh from "../assets/images/pouletthigh.png";
import poulet from "../assets/images/Poulet.jpg";
import poulet2 from "../assets/images/poulet2.png";
import poulet3 from "../assets/images/poulet3.png";
import Continuer from "../components/Continuer";
import PartsCard from "../components/PartsCard"; // Import the PartsCard component
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
      margin: "o auto",
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

export default function AccueilParties() {
  const styles = useStyles();
  const [searchParams] = useSearchParams();
  const [categorys, setCategorys] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          console.log("User is not authenticated");
          return;
        }

        // Fetch existing cart items from Firestore
        const cartQuery = query(
          collection(db, "addcart"),
          where("userId", "==", user.uid)
        );
        const cartSnapshot = await getDocs(cartQuery);
        const cartData = cartSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Update the cart state
        setCart(cartData);

        const q = query(
          collection(db, "category"),
          where("type", "==", searchParams.get("type"))
        );
        const querySnapshot = await getDocs(q);

        const categoryData = [];

        for (const doc of querySnapshot.docs) {
          const category = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, category.image));
          categoryData.push({ ...category, id: doc.id, imageUrl });
        }

        console.log("data", categoryData);
        setCategorys(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (category) => {
    // console.log("function", addToCart)
    try {
      const user = auth.currentUser;
      if (!user) {
        console.log("User is not authenticated");
        return;
      }

      // Check if the item already exists in the cart
      const itemExists = cart.some((item) => item.id === category.id);

      // If item exists, don't add it again
      if (itemExists) {
        console.log("Item already exists in the cart");
        return;
      }

      // delete category.id;
      const categoryWithUserId = { ...category, quantity: 1, userId: user.uid };
      const cartRef = await setDoc(
        doc(db, "addcart", category.id),
        categoryWithUserId
      );

      console.log("Document written with ID: ", cartRef);

      // Update the cart state using functional form of setCart
      setCart((prevCart) => [...prevCart, categoryWithUserId]);

      console.log("cart", cart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <Box className={styles.page} pb={8}>
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

      {categorys.map((category, index) => (
        <div key={index}>
          <Container className={styles.pouletthighContainer}>
            <PartsCard
              imageUrl={category.image}
              productName={category.name}
              onClick={() => addToCart(category)}
            />
          </Container>
        </div>
      ))}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/estimation1">
        <Continuer />
      </Link>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}
