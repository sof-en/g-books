import { api } from "../../../shared/api";
import { Root } from "../../../shared/model";
const URL = "/books";
export const popularBooksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPopularBooks: build.query<Root, void>({
      query: () => ({
        url: URL,
        params: {
          sort: "popular",
        },
      }),
    }),
    getSoundBooks: build.query<Root, void>({
      query: () => ({
        url: URL,
        params: {
          mime_type: "audio/mpeg",
        },
      }),
    }),
    getChildBooks: build.query<Root, void>({
      query: () => ({
        url: URL,
        params: {
          topic: "children",
        },
      }),
    }),
  }),
});

export const { useGetPopularBooksQuery, useGetSoundBooksQuery, useGetChildBooksQuery } =
  popularBooksApi;
