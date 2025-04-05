import { List, Skeleton } from 'antd';
import style from "@/fsd/widgets/chats/ui/Chat.module.scss";


export const ChatLoader = () => (
    <List
        itemLayout='horizontal'
    >
        { Array(5).fill(null).map((_, index) => (
            <List.Item key={ index } className={ style.plugItem }>
                <List.Item.Meta
                    avatar={ <Skeleton.Avatar active size={ 60 } shape="circle"/> }
                    title={
                        <div className={ style.plug_title_block }>
                            <div><Skeleton.Input active size="small"/></div>
                            <div><Skeleton.Button active size="small" shape="default" block/></div>
                        </div>
                    }
                    description={ <Skeleton.Input active size="medium" block/> }
                />
            </List.Item>
        )) }
    </List>
);