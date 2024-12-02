import React from "react";
import { ProductList } from "../components/Products/ProductList";
import { IonPage } from "@ionic/react";

export const ProductsPage = () => {
  return (
    <IonPage>
      <ProductList />
    </IonPage>
  );
};
