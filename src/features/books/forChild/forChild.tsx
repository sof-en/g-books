import { FC, useEffect } from "react";
import { useAction, useTypedSelector } from "../../../shared/model";
import { BookCart, useGetChildBooksQuery } from "../../../entities";
import {
  SharedCartSkeleton,
  SharedSlider,
} from "../../../shared/ui";
import { SwiperSlide } from "swiper/react";

export const ForChild: FC = () => {
  const childBooks = useTypedSelector(
    (state) => state.books.for_child_books_data
  );
  const { data, isLoading } = useGetChildBooksQuery();
  const { getChildBooks } = useAction();
  useEffect(() => {
    if (data?.results) {
      getChildBooks(data.results);
    }
  }, [data?.results, getChildBooks]);
  return (
    <SharedSlider>
      {isLoading ? (
        <SharedCartSkeleton />
      ) : (
        childBooks.map((item) => (
          <SwiperSlide key={item.id}>
            <BookCart {...item} />
          </SwiperSlide>
        ))
      )}
    </SharedSlider>
  );
};
