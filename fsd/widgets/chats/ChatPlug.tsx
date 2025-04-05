import style from "@/fsd/widgets/chats/ui/Chat.module.scss";
import { HandShakeIcon } from "@/public/HandShakeIcon";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export const ChatPlug = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/connects')
    }

    return (
        <div className={ style.plugConnects }>
            < HandShakeIcon width={ 100 } height={ 100 }/>
            <div>
                <div className={ style.headerPlug }>You don&apos;t have any chats yet</div>
                <div className={ style.textPlug }>Find interesting people to communicate,
                    make friends and have fun
                </div>
            </div>
            < Button className={ style.buttonBack } onClick={ handleBack }> Find new Connections</Button>
        </div>
    )
};