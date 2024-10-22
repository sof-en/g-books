import { FC, HTMLInputTypeAttribute } from "react";
import { Input } from "antd";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  type: HTMLInputTypeAttribute;
};
export const SharedInput: FC<Props> = ({ onChange, children, type }) => {
  return (
    <Input type={type} onChange={onChange}>
      {children}
    </Input>
  );
};
