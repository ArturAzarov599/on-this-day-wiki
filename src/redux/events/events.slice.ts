import { createSlice } from "@reduxjs/toolkit";

import { IEvent } from "../../interfaces";
import { eventsApi } from "./events.api";

interface IEventsState {
  events: IEvent[];
  isError: boolean;
}

const initialState: IEventsState = {
  events: [],
  isError: false,
};

export const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        eventsApi.endpoints.getEvents.matchFulfilled,
        (state, action) => {
          state.events = action.payload;
        }
      )
      .addMatcher(eventsApi.endpoints.getEvents.matchRejected, (state) => {
        state.isError = true;
      }),
});
