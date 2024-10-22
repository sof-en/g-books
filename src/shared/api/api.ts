import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Root } from "../model/type";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com" }),
  endpoints: (build) => ({
    getBooks: build.query<Root, void>({
      query: () => ({
        url: "/books",
      }),
    }),
  }),
});
export const { useGetBooksQuery } = api;
