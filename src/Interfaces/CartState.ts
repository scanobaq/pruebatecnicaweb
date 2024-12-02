import { CartItem } from "./CartItem";
import { Product } from "./ProductInterface";

type SortOption = "name" | "price" | "none";

export interface CartState {
  cart: CartItem[];
  currentSort: SortOption;
  initializeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  sortProducts: (option: SortOption) => void;
}
