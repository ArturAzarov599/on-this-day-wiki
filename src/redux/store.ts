import { configureStore } from "@reduxjs/toolkit";

import { eventsApi } from "./events/events.api";
import { eventsReducer } from "./events/events.reducer";

const store = configureStore({
  reducer: eventsReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([eventsApi.middleware]),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
