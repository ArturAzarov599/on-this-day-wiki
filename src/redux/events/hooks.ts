import { bindActionCreators } from "@reduxjs/toolkit";

import { eventsSlice } from "./events.slice";
import { useAppDispatch } from "../hooks";

export const useEventsActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(eventsSlice.actions, dispatch);
};
