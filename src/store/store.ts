import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./features/service/serviceSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
