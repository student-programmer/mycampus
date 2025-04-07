import { useState } from "react";
import { Button, Modal } from "antd";

interface ModalComponentProps {
  title: string;
  children: React.ReactNode;
  buttonText: string;
  handleOkEmit?: () => void;
  showModalEmit?: () => void;
  footerArray?: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  children,
  buttonText,
  handleOkEmit,
  showModalEmit,
  footerArray,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    showModalEmit && showModalEmit();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleOkEmit && handleOkEmit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Cancel"
        okText="Apply"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Apply
          </Button>,
          (footerArray || [])
        ].reverse()}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
