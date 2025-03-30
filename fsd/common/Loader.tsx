import { LoadingOutlined } from "@ant-design/icons";

import { Spin } from "antd";

export const Loader = () => {
    return (
        <div style={
            {
                display: 'flex',
                height: '100dvh',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }
        }>
            <Spin indicator={ <LoadingOutlined style={ {color: '#84cc16', fontSize: '100px'} } spin/> } size="large"/>
        </div>
    )
}