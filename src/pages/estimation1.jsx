import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import QuantitySelector from "../components/QuantitySelector";
import Poulet from "../assets/images/Poulet.jpg";
import Poulet2 from "../assets/images/poulet2.png";
import Payer from "../components/Payer";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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
  const [checkout, setCheckout] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

        // Update the checkout state
        setCheckout(cartData);
        console.log("cartdata", cartData);
        // Calculate total price
        let total = 0;
        cartData.forEach((item) => {
          total += item.quantity * item.price;
        });
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [checkout]);

  const removeFromCart = async (itemId) => {
    try {
      await db.collection("addcart").doc(itemId).delete();
      setCheckout((prevCheckout) =>
        prevCheckout.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const handleIncrement = async (itemId) => {
    try {
      const itemRef = doc(db, "addcart", itemId);
      const itemDoc = await getDoc(itemRef);
      if (!itemDoc.exists()) {
        console.log("Item does not exist in cart");
        return;
      }

      const itemData = itemDoc.data();
      const updatedQuantity = itemData.quantity + 1;

      await updateDoc(itemRef, { quantity: updatedQuantity });

      setCheckout((prevCheckout) =>
        prevCheckout.map((item) =>
          item.id === itemId ? { ...item, quantity: updatedQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };
  const handleDecrement = async (itemId) => {
    try {
      const itemRef = doc(db, "addcart", itemId);
      const itemDoc = await getDoc(itemRef);
      if (!itemDoc.exists()) {
        console.log("Item does not exist in cart");
        return;
      }

      const itemData = itemDoc.data();
      const updatedQuantity = itemData.quantity - 1;

      if (updatedQuantity <= 0) {
        await db.collection("addcart").doc(itemId).delete();
        setCheckout((prevCheckout) =>
          prevCheckout.filter((item) => item.id !== itemId)
        );
      } else {
        await updateDoc(itemRef, { quantity: updatedQuantity });

        setCheckout((prevCheckout) =>
          prevCheckout.map((item) =>
            item.id === itemId ? { ...item, quantity: updatedQuantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  return (
    <div className={styles.page}>
      {" "}
      {/* Add padding to the entire page */}
      <br></br>
      <br></br>
      <Link to="/AccueilParties2">
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
      {checkout.map((item) => (
        <div className={styles.container} key={item.id}>
          <img className={styles.layout} src={item.image} alt={item.name} />
          <div>
            <Typography className={styles.contentmain}>{item.name}</Typography>
            <div className={styles.container}>
              <QuantitySelector />
              <Typography className={styles.cefa}>{item.price * item.quantity}</Typography>
            </div>
          </div>
        </div>
      ))}
      <br></br>
      {/* <div>
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
      </div> */}
      <Typography className={styles.cout}>Coût Total</Typography>
      <div className={styles.priceContainer}>
        <Typography className={styles.cefav}>{totalPrice.toFixed(2)}</Typography>
        <div className={styles.payerContainer}>
          <Link to="/estimation2">
            <Payer className={styles.payer} />
          </Link>
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}
