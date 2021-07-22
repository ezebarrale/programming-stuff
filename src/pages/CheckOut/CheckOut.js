import React, { useContext, useState } from 'react';
import CheckOutC from '../../components/CheckOut/CheckOut';
import { CartContext } from '../../context/CartContext';

import { db } from '../../Firebase';
import firebase from 'firebase/app';

let buyerT;
let keyId;
const CheckOut = () => {
    const { cart } = useContext(CartContext);

    const { clearCart } = useContext(CartContext);
    const clear = () => clearCart();

    let variable = 1;
    const [cont, setCont] = useState(variable);

    const totalP = cart.reduce((ctotal, item) => {
        return item.price * item.quantity + ctotal;
    }, 0);

    const itemsCart = cart.map(element => {
        return { id: element.id, title: element.title, price: element.price, quantity: element.quantity }
    });

    const addPurchaseInfo = (purchase) => {
        buyerT = purchase;
        setCont(2);
    }

    const addPurchase = () => {
        db.collection('purchases').add({
            buyer: buyerT,
            items: itemsCart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalP
        }).then((docRef) => {
            keyId = docRef.id;
            updateStock();
            setCont(3);
            clear();
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    const updateStock = () => {
        itemsCart.forEach(async(elem) => {
            const art = await db.collection('articles').doc(elem.id).get();
            const artStock = art.data().stock - elem.quantity;
            await db.collection('articles').doc(elem.id).update({
                stock: artStock
            });
        })
    }

    return ( 
        <div>
            <CheckOutC addPurchase = { addPurchase }
                        addPurchaseInfo = { addPurchaseInfo }
                        cont = { cont }
                        keyId = { keyId }/>
        </div>
    )
}

export default CheckOut