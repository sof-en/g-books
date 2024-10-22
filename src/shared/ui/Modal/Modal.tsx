import { Modal } from "antd";
import { FC } from "react";
type Props = {
  children: React.ReactNode;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};
export const SharedModal: FC<Props> = ({
  children,
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>
  );
};
