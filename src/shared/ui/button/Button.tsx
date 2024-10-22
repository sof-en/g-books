import { FC } from "react";
import { type ReactNode } from "react";
import { Button } from "antd";
import { ButtonHTMLType } from "antd/es/button";
type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  type: ButtonHTMLType;
  className?: string;
};

export const SharedButton: FC<Props> = ({
  onClick,
  children,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <Button className={className}  htmlType={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
