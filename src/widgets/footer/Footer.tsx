import { FC } from "react";
import { Logo } from "../../shared/ui";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export const Footer: FC = () => {
  return (
    <div className="flex  w-full justify-around items-start   p-[30px] bg-[#0a0a0a]  ">
      <Logo />
      <div className="flex items-start flex-col gap-[10px]">
        <Text className="text-sm mt-2 text-white ">© 2024. All rights reserved.</Text>
        <Text className="text-sm mt-2 text-white ">
          Contact us: info@example.com | +1 (555) 123-4567
        </Text>
        <Text className="text-sm mt-2 text-white ">1234 Elm Street, Springfield, USA</Text>
      </div>
      <Space className="flex mt-4 items-center justify-center ">
        <Link to="/facebook" className="text-black hover:text-gray-700 mx-2">
          <FacebookOutlined style={{ fontSize: "24px", color: "white" }} />
        </Link>
        <Link to="/twitter" className="text-black hover:text-gray-700 mx-2">
          <TwitterOutlined style={{ fontSize: "24px", color: "white" }} />
        </Link>
        <Link to="/instagram" className="text-black hover:text-gray-700 mx-2">
          <InstagramOutlined style={{ fontSize: "24px", color: "white" }} />
        </Link>
      </Space>
    </div>
  );
};
