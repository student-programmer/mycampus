import React from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
import l from "@/fsd/features/auth/ui/LoginForm.module.scss";

type TagRender = SelectProps['tagRender'];

interface OptionType {
    value: any;
    label: string;
}

interface InputFieldProps {
    id: string;
    status?: 'error'; // сделали необязательным
    placeholder: string;
    defaultValue?: string[]; // теперь только массив строк
    onChange: (value: string[]) => void; // изменён тип
    option: OptionType[]; // переименовали option в options для согласованности
}


const tagRender: TagRender = (props) => {
    const {label, closable, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            onMouseDown={ onPreventMouseDown }
            closable={ closable }
            onClose={ onClose }
            className={ l.tag }
            style={ {marginInlineEnd: 4} }
        >
            { label }
        </Tag>
    );
};

export const CustomMultipleSelect = ({
                                         id,
                                         status,
                                         placeholder,
                                         defaultValue = [], // значение по умолчанию
                                         onChange,
                                         option // переименовали из option
                                     }: InputFieldProps) => {
    return (
        <Select
            id={ id }
            status={ status }
            placeholder={ placeholder }
            defaultValue={ defaultValue }
            onChange={ onChange }
            mode="multiple"
            tagRender={ tagRender }
            className={ l.multiple_select_item }
            dropdownStyle={ {
                backgroundColor: '#111a14',
                border: "2px solid #84cc16",
                borderRadius: "16px",
                color: '#84cc16',
            } }
            dropdownRender={ (menu) => (
                <div className={ l.select_item }>
                    { menu }
                </div>
            ) }
            options={ option }
        />
    );
};
