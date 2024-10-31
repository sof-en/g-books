import { BsFillTrashFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { FC, useState } from "react";
import { SharedDrawer } from "../../../shared/ui";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { useAction, useTypedSelector } from "../../../entities";

export const Save: FC = () => {
  const dataSaveBooks = useTypedSelector(
    (state) => state.favoritesBooks.favBooks
  );
  const { deleteFavBooks } = useAction();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={showDrawer} className="flex items-center p-[10px]">
        <Badge size={"small"} count={dataSaveBooks.length}>
          <BiBookmark  className="text-[24px] hover:text-[#1890ff] " />
        </Badge>
      </button>
      <SharedDrawer
        width={500}
        title={"Сохраненные книги"}
        open={open}
        onClose={onClose}
      >
        {dataSaveBooks.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-[10px]   border-b-[1px] border-b-[#d9d9d9]  "
          >
            <img
              src={item.formats["image/jpeg"]}
              className=" w-[60px] h-[60px] "
            />
            <div className=" flex flex-col items-center ">
              <Link target="_blank"  to={item.formats["text/html"]} className=" text-[14px] ">{item.title}</Link>
              <span className="text-[10px] text-[#6b7280] ">
                {item.authors[0]?.name}
              </span>
            </div>
            <button
              className="text-[crimson]"
              onClick={() => deleteFavBooks(item)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        ))}
      </SharedDrawer>
    </>
  );
};
