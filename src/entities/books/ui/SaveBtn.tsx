import { BsFillBookmarkFill } from "react-icons/bs";
import { FC } from "react";
import { BiBookmark } from "react-icons/bi";
import { ResultData } from "../../../shared/model";
import { message } from "antd";
import { useAction } from "../../hooks/action";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
    <>
      {contextHolder}
      <button onClick={handleClick} className={className} title="save">
        {isBookFavorited ? <BsFillBookmarkFill /> : <BiBookmark />}
      </button>
    </>
  );
};
