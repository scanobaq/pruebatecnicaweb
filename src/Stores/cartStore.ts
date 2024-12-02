import { CartState } from "../Interfaces/CartState";
import { create } from "zustand";
import { StorageService } from "../Services/StorageService";
import { CartItem } from "../Interfaces/CartItem";

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  currentSort: "none",
  initializeCart: async () => {
    const storage = StorageService.getInstance();
    const savedCart = await storage.get("cart");
    if (savedCart) {
      set({ cart: savedCart as CartItem[] });
    }
  },
  addToCart: async (product) =>
    set((state) => {
      const storage = StorageService.getInstance();
      const newCart = state.cart.find((item) => item.id === product.id)
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...product, quantity: 1 }];

      storage.set("cart", newCart);
      return { cart: newCart };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const storage = StorageService.getInstance();
      const newCart = state.cart.filter((item) => item.id !== productId);
      storage.set("cart", newCart);
      return { cart: newCart };
    }),
  clearCart: () => {
    const storage = StorageService.getInstance();
    storage.set("cart", []);
    set({ cart: [] });
  },
  totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
  sortProducts: (option) =>
    set((state) => {
      let sortedCart = [...state.cart];

      switch (option) {
        case "name":
          sortedCart.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "price":
          sortedCart.sort((a, b) => a.price - b.price);
          break;
        default:
          // Mantener el orden original
          break;
      }

      return {
        cart: sortedCart,
        currentSort: option,
      };
    }),
}));
