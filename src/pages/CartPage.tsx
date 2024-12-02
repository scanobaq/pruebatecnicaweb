import { IonContent, IonPage } from "@ionic/react";
import { Cart } from "../components/Cart/Cart";
import { BackButton } from "../components/CroossComponents/BackButton";

export const CartPage = () => {
  return (
    <IonPage>
      <BackButton title="Productos deseados" />
      <Cart />
    </IonPage>
  );
};
