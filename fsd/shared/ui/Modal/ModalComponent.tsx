import React, { useState } from "react";
import { Button, Modal } from "antd";
import style from '../Modal/ui/modal.module.scss'
import { FilterOutlined } from "@ant-design/icons";

interface ModalComponentProps {
    title: string;
    children: React.ReactNode;
    handleOkEmit?: () => void;
    showModalEmit?: () => void;
    footerArray?: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
                                                           title,
                                                           children,
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
            <Button className={ style.iconFilter } type="primary" onClick={ showModal }>
                <FilterOutlined/>
            </Button>
            <Modal
                title={ title }
                open={ isModalOpen }
                onOk={ handleOk }
                className={ style.modalStyler }
                onCancel={ handleCancel }
                cancelText="Cancel"
                centered
                okText="Apply"
                footer={ [
                    <Button className={ style.mainButton } key="submit" type="primary" onClick={ handleOk }>
                        Apply
                    </Button>,
                    <Button className={ style.cancelButton } key="back" onClick={ handleCancel }>
                        Cancel
                    </Button>,
                    (footerArray || [])
                ].reverse() }
            >
                { children }
            </Modal>
        </>
    );
};

export default ModalComponent;
