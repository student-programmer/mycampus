import React from "react";
import { Select } from "antd";
import l from "@/fsd/features/auth/ui/LoginForm.module.scss";

interface OptionType {
    value: string;
    label: string;
}

interface CustomSelectProps {
    id: string;
    status: 'error' | undefined;  // Статус ошибки
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // Обработчик изменения
    options: OptionType[];  // Массив опций для селекта
}

export const CustomSelect = ({id, status, placeholder, onChange, options}: CustomSelectProps) => {
    return (
        <Select
            id={ id }
            placeholder={ placeholder }
            status={ status }
            onChange={ onChange }
            options={ options }
            className={ l.customSelect }
            dropdownStyle={ {
                backgroundColor: '#111a14',
                border: "2px solid #84cc16",
                borderRadius: "16px",
                color: '#84cc16'
            } }
            dropdownRender={ menu => (
                <div className={ l.select_item }>
                    { menu }
                </div>
            ) }
        />
    );
};
