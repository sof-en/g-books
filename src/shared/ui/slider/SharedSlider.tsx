import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import style from "./style.module.scss";
interface SharedSliderProps {
  children: React.ReactNode;
}

export const SharedSlider: FC<SharedSliderProps> = ({ children }) => {
  return (
    <Swiper
      className={style.swiperContainer}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      navigation
      allowTouchMove={false}
    >
      {children}
    </Swiper>
  );
};
