import { FC } from "react";
import { Carousel } from "antd";
import scss from "./banner.module.scss"; // Подключение стилей
import { SharedButton } from "../../shared/ui";

export const BannerSlide: FC = () => {
  const banners = [
    {
      id: 1,
      title: "Добро пожаловать в Gutendex BOOKS",
      description:
        "Исследуйте литературные шедевры и современные произведения в формате электронной книги.",
      image: "https://americanbookco.com/wp-content/uploads/2021/02/stacked-books-1920x960.jpeg",
    },
    {
      id: 2,
      title: "Чтение без границ",
      description:
        "Откройте для себя бесконечный мир бесплатных книг на любой вкус.",
      image: "/images/slide_2.jpg",
    },
  ];

  return (
    <Carousel
      autoplay
      arrows
      className={`${scss.carousel}`}
    >
      {banners.map((banner) => (
        <div key={banner.id} className={scss.bannerSlide}>
          <div
            className={scss.bannerContent}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${banner.image})`,
            }}
          >
            <div className={scss.textContent}>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
            <SharedButton className={scss.btn}  type={"submit"}>
              Исселовать
            </SharedButton>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

