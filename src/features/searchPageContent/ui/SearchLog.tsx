import { FC, useState } from "react";
import { Input, Button, Select, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import scss from "./style.module.scss";
import { BookCart, useTypedSelector } from "../../../entities";
import { ResultData } from "../../../shared/model";

const { Option } = Select;

export const SearchLog: FC = () => {
  const results = useTypedSelector((state) => state.saveBooks.resultSearchData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [yearStart, setYearStart] = useState<number | undefined>(1800);
  const [yearEnd, setYearEnd] = useState<number | undefined>(2023);

  return (
    <div className={scss.content}>
      <h2 className={scss.header}>Search in Gutendex</h2>

      <div className={scss.filtersContainer}>
        {/* Поле для поиска */}
        <div className={scss.searchBar}>
          <Input
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={scss.input}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            className={scss.searchButton}
          >
            Search
          </Button>
        </div>

        {/* Фильтры */}
        <div className={scss.filters}>
          {/* Фильтр по языку */}
          <div className={scss.filter}>
            <label>Language:</label>
            <Select defaultValue="en" className={scss.select}>
              <Option value="en">English</Option>
              <Option value="fr">French</Option>
              <Option value="es">Spanish</Option>
              <Option value="de">German</Option>
            </Select>
          </div>

          {/* Фильтр по теме */}
          <div className={scss.filter}>
            <label>Topic:</label>
            <Select
              placeholder="Select topic"
              className={scss.select}
              allowClear
            >
              <Option value="fiction">Fiction</Option>
              <Option value="science">Science</Option>
              <Option value="history">History</Option>
              <Option value="philosophy">Philosophy</Option>
            </Select>
          </div>

          {/* Фильтр по году */}
          <div className={scss.filter}>
            <label>Author Year:</label>
            <div className={scss.yearInputContainer}>
              <Input
                value={yearStart}
                onChange={(e) => setYearStart(Number(e.target.value))}
                className={scss.yearInput}
                type="number"
                min={1500}
                max={2023}
                placeholder="Start Year"
              />
              <span>to</span>
              <Input
                value={yearEnd}
                onChange={(e) => setYearEnd(Number(e.target.value))}
                className={scss.yearInput}
                type="number"
                min={1500}
                max={2023}
                placeholder="End Year"
              />
            </div>
          </div>

          {/* Сортировка */}
          <div className={scss.filter}>
            <label>Sort By:</label>
            <Select defaultValue="relevance" className={scss.select}>
              <Option value="relevance">Relevance</Option>
              <Option value="date_asc">Date (Oldest)</Option>
              <Option value="date_desc">Date (Newest)</Option>
            </Select>
          </div>
        </div>

        <Divider />
      </div>
      {/* Место для результатов поиска */}
      <div className={scss.results}>
       <>
       {results?.map((item: ResultData) => (
          <BookCart key={item.id} {...item} />
        ))}
       </>
      </div>
    </div>
  );
};
