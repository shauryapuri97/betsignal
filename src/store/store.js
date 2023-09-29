import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";

const store = configureStore({
  reducer: {
    config: configSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;
