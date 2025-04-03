import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { CurrentDate } from "@/utils/utils";

interface CustomDatepickerProps {
    id: string;
    name: string;
    status: 'error' | undefined;  // Статус ошибки
    placeholder: string;
    defaultValue?: string | undefined;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // Обработчик изменения
}

export const CustomDatepicker = ({
                                     id,
                                     name,
                                     status,
                                     placeholder,
                                     defaultValue,
                                     value,
                                     onChange
                                 }: CustomDatepickerProps) => {
    const currentDate = CurrentDate();

    return (
        <DatePicker
            id={ id }
            name={ name }
            className={ style.datepicker_field }
            defaultValue={ defaultValue ? dayjs(defaultValue, 'YYYY-MM-DD') : '' }
            value={ value ? dayjs(value, 'YYYY-MM-DD') : '' }
            onChange={ onChange }
            status={ status }
            placeholder={ placeholder }
            maxDate={ dayjs(currentDate, 'YYYY-MM-DD') }
            format={ {
                format: 'YYYY-MM-DD',
                type: 'mask',
            } }
        />
    )
}