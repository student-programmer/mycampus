import l from "@/fsd/features/auth/ui/LoginForm.module.scss";
import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

export const BusinessForm = ({handleLogin}) => {
    return (
        <>
            <h2 className={ l.business_title }>Business Account</h2>
            <p className={ l.description }>Sign in 1 minute for free!</p>

            <div className={ l.form_box }>
                <div>
                    <label htmlFor='company-name' className={ l.label }>
                        Company Name
                    </label>
                    <Input
                        className={ l.input_field }
                        status={"error"}
                        prefix={ <MailOutlined
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Enter your company name..."
                    />
                </div>
                <div>
                    <label htmlFor='business-email' className={ l.label }>
                        Email Address
                    </label>
                    <Input
                        className={ l.input_field }
                        prefix={ <MailOutlined
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Enter your email..."
                    />
                </div>
                <div>
                    <label htmlFor='password' className={ l.label }>
                        Password
                    </label>
                    <Input.Password
                        className={ l.input_field }
                        prefix={ <LockOutlined
                            style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "white"} }/> }
                        placeholder="Input password..."
                        iconRender={ (visible) => (visible ?
                            <EyeOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/> :
                            <EyeInvisibleOutlined
                                style={ {fontSize: "22px", display: "flex", alignItems: "center", color: "gray"} }/>) }
                    />
                </div>
            </div>
            <button className={ l.login_button } onClick={ handleLogin }>
                Create account
            </button>

        </>
    )
}