import { FC } from "react";
import { ResultData } from "../../model";

export const SharedCart: FC<ResultData> = (props) => {
  const {
    // id,
    // title,
    // authors,
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
    <>
      <div className=" w-[100%] flex flex-col gap-3  bg-whiteGray rounded-[10px]  p-[10px] ">
        {imageSrc ? (
          <img className=" object-cover w-[100%] h-[300px] " src={imageSrc} alt="photo authors" />
        ) : (
          <div>No image available</div>
        )}
        {/* <div>{title}</div> */}
        <div>
          {authors.length > 0 && <span>{authors[0].name}</span>}
          {authors.length > 1 && <span>{authors[1].birth_year}</span>}
          {authors.length > 2 && <span>{authors[2].death_year}</span>}
        </div>
        <span>{download_count}</span>
      </div>
    </>
  );
};
