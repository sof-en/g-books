import { api } from "../../../shared/api";
import { Root } from "../../../shared/model";

export const searchApiBook = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.mutation<Root, string>({
      query: (value) => ({
        url: `/books`,
        params: {
          search: value,
        },
      }),
    }),
  }),
});

export const { useGetSearchMutation } = searchApiBook;
