import { Button, Input, message } from "antd";
import { FC, useState } from "react";
import scss from "./search.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { saveBooksActions, useGetSearchMutation } from "../../../entities";
import { useDispatch } from "react-redux";

export const Search: FC = () => {
  const [getSearch, { isLoading }] = useGetSearchMutation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const sanitizeInput = (input: string) => {
    return input.replace(/[\s\W_]+/g, "");
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedSearchTerm = sanitizeInput(searchTerm);
    if (!sanitizedSearchTerm) {
      messageApi.info("Please enter something to search!");
    } else {
      try {
        const response = await getSearch(sanitizedSearchTerm).unwrap();

        if (response.results.length === 0) {
          messageApi.error("No results found!");
        } else {
          messageApi.success("Success!");
          dispatch(saveBooksActions.saveResultSearch(response.results));
        }
      } catch (err) {
        messageApi.error("Error occurred during search!");
        console.error("Error occurred during search:", err);
      } finally {
        setSearchTerm("");
      }
    }
  };

  return (
    <form className={scss.form} onSubmit={handleSearch}>
      {contextHolder}
      <Input
        className={scss.input}
        type="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <Button className={scss.btn} htmlType="submit" loading={isLoading}>
        <SearchOutlined className={scss.icon} />
      </Button>
    </form>
  );
};
