import { BsFillBookmarkFill } from "react-icons/bs";
import { FC } from "react";
import { BiBookmark } from "react-icons/bi";
import { ResultData, useAction, useTypedSelector } from "../../../shared/model";
import { message } from "antd";

export const SaveBtn: FC<{ className?: string; book: ResultData }> = ({
  className,
  book,
}) => {
  const { saveFavBooks, deleteFavBooks } = useAction();
  const isBookFavorited = useTypedSelector((state) =>
    state.favoritesBooks.FavoriteBooksId.includes(book.id)
  );
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    if (isBookFavorited) {
      deleteFavBooks(book);
      messageApi.info("Успешно удалено из избранного");
    } else {
      messageApi.success("Ваша книга успешно сохранено");
      saveFavBooks(book);
    }
  };
  return (
    <button onClick={handleClick} className={className} title="save">
      {contextHolder}
      {isBookFavorited ? <BsFillBookmarkFill /> : <BiBookmark />}
    </button>
  );
};
