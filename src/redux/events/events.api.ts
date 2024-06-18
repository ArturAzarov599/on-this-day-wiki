import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IEvent,
  IGetEventsRequestParams,
  IWikiResponse,
} from "../../interfaces";
import { generateUniqueId } from "../../utils/generateUuid";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.wikimedia.org/feed/v1/wikipedia/en/featured/",
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<IEvent[], IGetEventsRequestParams>({
      query: ({ accessToken, searchCondition }) => ({
        url: searchCondition,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }),
      transformResponse: (response: IWikiResponse) =>
        response.onthisday.map((event) => ({
          id: generateUniqueId(),
          name: event.text,
          year: event.year,
        })),
    }),
  }),
});

export const { useLazyGetEventsQuery } = eventsApi;
