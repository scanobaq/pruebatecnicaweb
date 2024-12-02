import {
  IonButton,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import React from "react";
import { useCartStore } from "../../Stores/cartStore";
import { SortProductCart } from "./SortProductCart";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  return (
    <IonContent className="ion-padding">
      {cart.length === 0 ? (
        <IonText>
          <p className="p-5">No hay productos....</p>
        </IonText>
      ) : (
        <div>
          <SortProductCart />
          <div className="mt-5">
            {cart.map((item) => (
              <IonItem key={item.id} className="mb-4">
                <IonThumbnail slot="start">
                  <IonImg src={item.images[0]} alt={item.title} />
                </IonThumbnail>
                <IonLabel className="ion-padding-start">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">Cantidad: {item.quantity}</p>
                </IonLabel>
                <IonButton
                  color="danger"
                  fill="solid"
                  shape="round"
                  slot="end"
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs"
                >
                  Eliminar
                </IonButton>
              </IonItem>
            ))}
          </div>

          <IonButton
            shape="round"
            expand="block"
            color="danger"
            className="p-5"
            onClick={clearCart}
          >
            Vaciar productos
          </IonButton>
        </div>
      )}
    </IonContent>
  );
};
