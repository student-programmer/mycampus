import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";
import { Select } from "antd";

export const CustomSelect = (props) => {
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