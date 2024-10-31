import { FC } from "react";
import { ResultData } from "../../../shared/model";
import style from "./cart.module.scss";
import { SaveBtn } from "./SaveBtn";
import { AboutBtn } from "./AboutBtn";
import { Skeleton } from "antd";

export const BookCart: FC<ResultData> = (props) => {
  const {
    // id,
    title,
    authors,
    // translators,
    // subjects,
    // bookshelves,
    // languages,
    // copyright,
    // media_type,
    formats,
    download_count,
  } = props;

  const imageSrc = formats["image/jpeg"];

  return (
    <div
      className={`w-[100%] relative flex flex-col gap-3 bg-whiteGray rounded-[10px] p-[10px] ${style.content}`}
    >
      {imageSrc ? (
        <img
          className="object-cover w-[100%] h-[300px]"
          src={imageSrc}
          alt="photo authors"
        />
      ) : (
        <Skeleton.Image   active={true} style={{ width: "100%", height: "300px" }}  />
      )}
      <div>
        {authors.length > 0 && <span>{authors[0].name}</span>}
        {authors.length > 1 && <span>{authors[1].birth_year}</span>}
        {authors.length > 2 && <span>{authors[2].death_year}</span>}
      </div>
      <span className=" overflow-hidden whitespace-nowrap text-ellipsis  ">{title}</span>
      <span className=" text-[#6b7280]  ">количество скачиваний: {download_count}</span>

      {/* Контейнер с иконками, которые будут появляться при наведении */}
      <div
        className={`absolute flex items-center gap-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${style.iconContainer}`}
      >
        <SaveBtn className={style.bg} book={props} />
        <AboutBtn className={style.bg} data={props} />
      </div>
    </div>
  );
};
