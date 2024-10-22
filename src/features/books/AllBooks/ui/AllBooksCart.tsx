import { FC, useEffect } from "react";
import scss from "./style.module.scss";
import { useAction, useTypedSelector } from "../../../../shared/model";
import { useGetBooksQuery } from "../../../../shared/api";
import { SharedCart } from "../../../../shared/ui";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { useWindowSize } from "react-use";
export const AllBooksCart: FC = () => {
  // Изменяем селектор для выборки только нужных данных
  const booksData = useTypedSelector((state) => state.books.booksData);
  const { width } = useWindowSize();
  const { data } = useGetBooksQuery();
  const { getBooks } = useAction();

  useEffect(() => {
    if (data?.results) {
      getBooks(data.results);
    }
  }, [data?.results, getBooks]);

  function switchPerView() {
    switch (width) {
      case 1200:
        return 4;
      case 992:
        return 3;
      case 768:
        return 2;
      case 576:
        return 1;
      default:
        break;
    }
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={switchPerView()}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={scss.swiper}
      >
        {data &&
          booksData?.map((el) => (
            <SwiperSlide key={el.id}>
              <SharedCart {...el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
