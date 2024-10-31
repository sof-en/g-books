import { FC, useState, useEffect } from "react";
import { Input, Button, Divider, message, Spin } from "antd";
import scss from "./style.module.scss";
import {
  BookCart,
  useAction,
  useSearchBooksMutation,
  useTypedSelector,
} from "../../../entities";
import { ResultData } from "../../../shared/model";

export const SearchLog: FC = () => {
  const results = useTypedSelector((state) => state.saveBooks.resultSearchData);
  const { clearResultSearch } = useAction();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [yearStart, setYearStart] = useState<number | undefined>(0);
  const [yearEnd, setYearEnd] = useState<number | undefined>(2023);
  const [lanValue, setLanValue] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();

  const [searchBooks, { data, isLoading, isSuccess }] =
    useSearchBooksMutation();

  const handleSearch = async () => {
    try {
      await searchBooks({
        search: searchTerm,
        language: lanValue,
        topic,
        yearStart,
        yearEnd,
      }).unwrap();
    } catch (error) {
      messageApi.error("Ошибка поиска, попробуйте снова.");
      console.error("Ошибка поиска:", error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      messageApi.loading("Идет поиск...");
    }
    if (isSuccess) {
      messageApi.success("Поиск успешно завершен!");
      clearResultSearch();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isLoading, isSuccess, messageApi]);

  return (
    <div className={scss.content}>
      <h2 className={scss.header}>Фильтрация по книгам</h2>
      {contextHolder}
      <form
        className={scss.filtersContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className={scss.searchBar}>
          <Input
            placeholder="поиск по книгам, авторам..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={scss.input}
          />
        </div>

        <div className={scss.filters}>
          <div className={scss.filter}>
            <Input
              placeholder="язык книги en, ru..."
              value={lanValue}
              onChange={(e) => setLanValue(e.target.value)}
              type="text"
            />
          </div>
          <div className={scss.filter}>
            <Input
              placeholder="тема книги children, poetry..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              type="text"
            />
          </div>
          <div className={scss.filter}>
            <label>Год автора:</label>
            <div className={scss.yearInputContainer}>
              <Input
                value={yearStart}
                onChange={(e) => setYearStart(Number(e.target.value))}
                className={scss.yearInput}
                type="number"
                min={0}
                max={2024}
                placeholder="начальный год"
              />
              <span>до</span>
              <Input
                value={yearEnd}
                onChange={(e) => setYearEnd(Number(e.target.value))}
                className={scss.yearInput}
                type="number"
                min={0}
                max={2024}
                placeholder="конечный год"
              />
            </div>
          </div>
          <Button htmlType="submit" type="primary">
            фильтровать
          </Button>
        </div>
        <Divider />
      </form>

      <div className={scss.results}>
        {/* { data ? (
       isLoading ? (
          <Spin tip="Загрузка..." />
        ) : data?.results.length === 0 ? (
          <p className="text-center">Ничего не найдено</p>
        ) : (
          (data?.results || results || []).map((item: ResultData) => (
            <BookCart key={item.id} {...item} />
          ))
        )
       )
       : <p className="text-center text-[20px]">Пусто</p> } */}
        <div className={scss.results}>
          {isLoading ? (
            <Spin tip="Загрузка..." />
          ) : data?.results?.length ? (
            data.results.map((item: ResultData) => (
              <BookCart key={item.id} {...item} />
            ))
          ) : results.length ? (
            results.map((item: ResultData) => (
              <BookCart key={item.id} {...item} />
            ))
          ) : (
            <p className="text-center">Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  );
};
