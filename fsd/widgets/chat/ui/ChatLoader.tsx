import { Skeleton } from 'antd';

import style from "@/fsd/widgets/chat/ui/chatDetail.module.scss";

export const ChatLoader = () => {
    return (
        <div className={ style.wrapperDetail }>
            <div className={ style.goBackContainer }>
                <Skeleton.Button active className={ style.skeletonBtn }/>
                <Skeleton.Button active size="small" block/>
                <Skeleton.Avatar active shape="circle"/>
            </div>
            <div className={ style.listContainer }>
                <div className={ style.messages }>
                    { [...Array(6)].map((_, i) => (
                        <Skeleton.Button key={ i } active
                                         className={ `${ i % 2 == 0 ? style.myMessageSkeleton : style.otherMessageSkeleton }` }/>
                    )) }
                </div>
            </div>
            <div className={ style.inputContainer }>
                <Skeleton.Button active className={ style.inputSkeleton } block/>
                <Skeleton.Button active className={ style.skeletonBtn }/>
            </div>
        </div>
    )
}