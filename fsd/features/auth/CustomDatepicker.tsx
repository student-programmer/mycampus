import style from "@/fsd/widgets/profile/ui/profile.module.scss";
import React from "react";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { CurrentDate } from "@/utils/utils";

const DATE_FORMAT = 'YYYY-MM-DD';

interface CustomDatepickerProps {
    id: string;
    name: string;
    status?: 'error';
    placeholder: string;
    defaultValue?: string;
    value?: string;
    onChange: (value: Dayjs | null) => void;
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
            id={id}
            name={name}
            className={style.datepicker_field}
            defaultValue={defaultValue ? dayjs(defaultValue, DATE_FORMAT) : undefined}
            value={value ? dayjs(value) : undefined}
            onChange={onChange}
            status={status}
            placeholder={placeholder}
            maxDate={dayjs(currentDate, DATE_FORMAT)}
            format={{
                format: DATE_FORMAT,
                type: 'mask',
            }}
        />
    );
};
