import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./features/service/serviceSlice";
import videoReducer from "./features/video/videoSlice";
import customerReducer from "./features/customer/customerSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    video: videoReducer,
    customer: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
