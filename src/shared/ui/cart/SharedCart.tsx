import { BiBookmark } from "react-icons/bi"; 
import { FcAbout } from "react-icons/fc"; 
// import { FaBookmark } from "react-icons/fa"; 
import { FC } from "react";
import { ResultData } from "../../model";
import style from "./sharedCart.module.scss";

export const SharedCart: FC<ResultData> = (props) => {
  const {
    // id,
    // title,
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
    <div className={`w-[100%] relative flex flex-col gap-3 bg-whiteGray rounded-[10px] p-[10px] ${style.content}`}>
      {imageSrc ? (
        <img className="object-cover w-[100%] h-[300px]" src={imageSrc} alt="photo authors" />
      ) : (
        <div>No image available</div>
      )}
      <div>
        {authors.length > 0 && <span>{authors[0].name}</span>}
        {authors.length > 1 && <span>{authors[1].birth_year}</span>}
        {authors.length > 2 && <span>{authors[2].death_year}</span>}
      </div>
      <span>{download_count}</span>

      {/* Контейнер с иконками, которые будут появляться при наведении */}
      <div className={`absolute flex items-center gap-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${style.iconContainer}`}>
        <div className={style.bg} title="save">
          {/* <FaBookmark /> */}
          <BiBookmark />
        </div>
        <div className={style.bg} title="about">
          <FcAbout />
        </div>
      </div>
    </div>
  );
};
