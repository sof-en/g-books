import { FC, useEffect } from "react";
import { useAction, useTypedSelector } from "../../../shared/model";
import { useGetChildBooksQuery } from "../../../entities";
import { SharedCart, SharedSlider } from "../../../shared/ui";
import { SwiperSlide } from "swiper/react";
import { Spin } from "antd";

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
        <Spin style={{ width: "100%", textAlign: "center" }} size="large" />
      ) : (
        childBooks.map((item) => (
          <SwiperSlide key={item.id}>
            <SharedCart {...item} />
          </SwiperSlide>
        ))
      )}
    </SharedSlider>
  );
};