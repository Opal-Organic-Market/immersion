import React, { useEffect, useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import "../index.css";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  quantitySelector: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 12px",
    gap: "12px",
    width: "134px",
    height: "36px",
    background: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },
  rule: {
    width: "1px",
    height: "36px",
    background: "#D9D9D9",
  },
  circle: {
    // position: 'absolute',
    left: "4.17%",
    right: "4.17%",
    top: "4.17%",
    bottom: "4.17%",
    // background: 'rgba(0, 0, 0, 0.75)',
    width: "20px",
    height: "20px",
    border: "1px solid black",
    borderRadius: "50%",
    minWidth: "20px",
  },
  plus: {
    fontWeight: "bold",
  },

  minus: {
    fontWeight: "bold",
  },
  number: {
    width: "20px",
    height: "20px",
    fontFamily: "Droid Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#252425",
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
}));

function QuantitySelector() {
  const classes = useStyles();
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

  // const removeFromCart = async (itemId) => {
  //   try {
  //     await db.collection("addcart").doc(itemId).delete();
  //     setCheckout((prevCheckout) =>
  //       prevCheckout.filter((item) => item.id !== itemId)
  //     );
  //   } catch (error) {
  //     console.error("Error removing from cart:", error);
  //   }
  // };

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
    <div>
      {checkout.map((item) => (
        <div key={item.id}>
          <div className={classes.quantitySelector}>
            <Button
              className={`${classes.circle} ${classes.minus}`}
              onClick={() => handleDecrement(item.id)}
            >
              -
            </Button>
            <div className={classes.rule}></div>
            <TextField
              className={classes.number}
              value={item.quantity}
              type="number"
              inputProps={{
                style: {
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "#252425",
                },
              }}
            />
            <div className={classes.rule}></div>
            <Button
              className={`${classes.circle} ${classes.plus}`}
              onClick={() => handleIncrement(item.id)}
            >
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuantitySelector;
