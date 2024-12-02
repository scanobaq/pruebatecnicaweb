import React, { useState } from "react";
import { useCartStore } from "../../Stores/cartStore";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

type SortOption = "name" | "price" | "none";
export const SortProductCart = () => {
  const sortProducts = useCartStore((state) => state.sortProducts);
  const currentSort = useCartStore((state) => state.currentSort);
  const handleSort = (option: SortOption) => {
    sortProducts(option);
  };

  const [isAscending, setIsAscending] = useState(true);

  return (
    <div className="p-4 bg-white shadow-sm">
      <p className="text-sm text-gray-600 mb-2">Ordenar por:</p>
      <IonSegment
        value={currentSort}
        onIonChange={(e) => handleSort(e.detail.value as SortOption)}
        className="rounded-lg"
      >
        <IonSegmentButton value="none" className="px-2 py-1">
          <IonLabel className="text-sm">Por defecto</IonLabel>
        </IonSegmentButton>

        <IonSegmentButton value="name" className="px-2 py-1">
          <IonLabel className="text-sm">Nombre</IonLabel>
        </IonSegmentButton>

        <IonSegmentButton value="price" className="px-2 py-1">
          <IonLabel className="text-sm">Precio</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};
