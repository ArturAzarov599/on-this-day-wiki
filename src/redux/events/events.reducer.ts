import { eventsApi } from "./events.api";
import { eventsSlice } from "./events.slice";

export const eventsReducer = {
  [eventsSlice.name]: eventsSlice.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
};
