import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import homeDataReducer from "./features/homeDataSlice"
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cmsApi } from "./services/cmsApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    homeDataReducer,
    [userApi.reducerPath]: userApi.reducer,
    [cmsApi.reducerPath]: cmsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware, cmsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
