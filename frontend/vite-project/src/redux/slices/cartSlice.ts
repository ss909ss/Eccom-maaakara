import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type CartItem = {
  id: string;
  images: string[];
  title: string;
  sizes: number[];
  price: number;
  quantity: number;
};

interface CartSliceState {
  totalPrice: number; 
  items: CartItem[]; 
}

const initialState: CartSliceState = {
  totalPrice: 0, 
  items: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: { 
    addToCart(state, action: PayloadAction<CartItem>) { 
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    incrementCount(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.quantity++;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    dicrementCount(state, action: PayloadAction<string>) { 
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeAllItems(state) { 
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem(state, action: PayloadAction<string>) { 
      state.items = state.items.filter((item) => item.id !== action.payload);
    state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id); 

export const {
  addToCart,
  removeAllItems,
  removeItem,
  incrementCount,
  dicrementCount,
} = cartSlice.actions;

export default cartSlice.reducer;

// Этот код создает срез для управления состоянием корзины в вашем приложении, определяя редьюсеры для добавления, 
// удаления и изменения количества товаров. Он также предоставляет селекторы для получения данных о корзине. 
// С помощью этого среза вы можете легко управлять состоянием корзины в своем приложении, 
// обеспечивая простоту использования и чистоту кода.