import { Modal } from "antd";
import { FC } from "react";
type Props = {
  children: React.ReactNode;
  isModalOpen: boolean;
  handleCancel: () => void;
};
export const SharedModal: FC<Props> = ({
  children,
  isModalOpen,

  handleCancel,
}) => {
  return (
    <Modal className=" " title="search"  footer={null}  open={isModalOpen}  onCancel={handleCancel}>
      {children}
    </Modal>
  );
};
