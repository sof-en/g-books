import { FC, useEffect } from "react";
import { SharedCartSkeleton, SharedSlider } from "../../../../shared/ui";
import { BookCart, useAction, useGetPopularBooksQuery, useTypedSelector } from "../../../../entities";
import { SwiperSlide } from "swiper/react";

export const PopularBooksCart: FC = () => {
  const popularBooksData = useTypedSelector(
    (state) => state.books.popularBooksData
  );
  const { data, isLoading } = useGetPopularBooksQuery();
  const { getPopularBooks } = useAction();

  useEffect(() => {
    if (data?.results) {
      getPopularBooks(data.results);
    }
  }, [data?.results, getPopularBooks]);
  return (
    <>
      <SharedSlider>
        {isLoading ? (
          <SharedCartSkeleton />
        ) : (
          popularBooksData.map((item) => (
            <SwiperSlide key={item.id}>
              <BookCart {...item} />
            </SwiperSlide>
          ))
        )}
      </SharedSlider>
    </>
  );
};
