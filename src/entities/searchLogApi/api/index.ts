import { api } from "../../../shared/api";
import { Root } from "../../../shared/model";

export const searchLogApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchBooks: build.mutation<
      Root,
      {
        search?: string;
        language?: string;
        topic?: string;
        yearStart?: number | null;
        yearEnd?: number | null;
      }
    >({
      query: ({ search = "", language = "", topic = "", yearStart, yearEnd }) => {
        const params: Record<string, string | number> = {};
        
        // Добавляем только параметры, которые имеют значение
        if (search) params.search = search;
        if (language) params.languages = language;
        if (topic) params.topic = topic;
        if (yearStart) params.publication_year_start = yearStart;
        if (yearEnd) params.publication_year_end = yearEnd;

        return {
          url: `/books`,
          params,
        };
      },
    }),
  }),
});

export const { useSearchBooksMutation } = searchLogApi;
