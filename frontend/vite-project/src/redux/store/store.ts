import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import productsReducer from '../slices/productSlice'
import cartReducer from "../slices/cartSlice";
import authReducer from '../slices/adminSlice';
import { api } from '../../services/api';
import { listenerMiddleware } from '../../middleware/auth';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>