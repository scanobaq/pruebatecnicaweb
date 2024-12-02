import { IonContent, IonPage } from "@ionic/react";
import { ProductsPage } from "./ProductsPage";
import { CartButton } from "../components/Cart/CartButton";
import { useCartStore } from "../Stores/cartStore";
import { useEffect } from "react";

const Home: React.FC = () => {
  const initCart = useCartStore((state) => state.initializeCart);
  useEffect(() => {
    initCart();
  }, [initCart]);
  return (
    <IonPage>
      <IonContent fullscreen className="ion-margin-top-xl">
        <ProductsPage />
        <CartButton />
      </IonContent>
    </IonPage>
  );
};

export default Home;
