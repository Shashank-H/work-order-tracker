import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { orderSlice } from "./orderSlice"

export const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;