import React, { useState } from "react";
import { FetchApi } from "../../Services/ApiProducts";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/react";
import { heart } from "ionicons/icons";
import { cartOutline } from "ionicons/icons";
import { useCartStore } from "../../Stores/cartStore";

export const ProductList = () => {
  const products = FetchApi({
    url: "https://api.escuelajs.co/api/v1/products",
    method: "GET",
  });

  const { addToCart } = useCartStore();
  return (
    <IonContent className="mx-auto h-auto mt-20">
      <IonGrid className="gap-5">
        <IonRow className="ion-justify-content-center">
          {products.map((product) => (
            <IonCol
              size="6"
              sizeMd="2"
              key={product.id}
              className="ion-padding"
            >
              <IonCard className="rounded-[20px] bg-slate-50">
                <div className="flex items-center justify-center p-4">
                  <img
                    src={product.images[0]}
                    alt="Product Image"
                    className="w-[80px] h-[80px] object-contain"
                  />
                </div>
                <IonCardContent className="ion-text-center">
                  <div className="flex flex-col items-center gap-2">
                    <IonText color="primary" className="text-lg font-bold">
                      $ {product.price}
                    </IonText>
                    <IonText className="text-sm">{product.title}</IonText>
                    <IonButton
                      color="warning"
                      shape="round"
                      className="w-28 text-sm"
                      onClick={() => addToCart(product)}
                    >
                      Agregar
                      <IonIcon icon={heart} slot="end" />
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
