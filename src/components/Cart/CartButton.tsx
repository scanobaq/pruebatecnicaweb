import { IonBadge, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import { useCartStore } from "../../Stores/cartStore";

export const CartButton = () => {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton className="relative bg-secondary" routerLink="/cartpage">
        <IonIcon icon={heart} className="text-[22px]" />
        {totalItems > 0 && (
          <IonBadge
            color="danger"
            className="absolute -top-[-9px] -right-[-9px] w-4 h-4 rounded-full flex items-center justify-center"
          >
            {totalItems}
          </IonBadge>
        )}
      </IonFabButton>
    </IonFab>
  );
};
