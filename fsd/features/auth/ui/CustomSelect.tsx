import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";
import { Select } from "antd";

interface OptionType {
    value: string;
    label: string;
}

interface CustomSelectProps {
    id: string;
    name: string;
    status: 'error' | undefined;  // Статус ошибки
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // Обработчик изменения
    options: OptionType[];  // Массив опций для селекта
}

interface InputFieldProps {
    props: CustomSelectProps;
}


export const CustomSelect = ({props}: InputFieldProps) => {
    return (
        <Select
            { ...props }
            className={ l.customSelect }
            dropdownStyle={ {
                backgroundColor: '#111a14',
                border: "2px solid #84cc16",
                borderRadius: "16px",
                color: '#84cc16'
            } }
            dropdownRender={ (menu) => (
                <div className={ l.select_item }>
                    { menu }
                </div>
            ) }
        />
    )
}