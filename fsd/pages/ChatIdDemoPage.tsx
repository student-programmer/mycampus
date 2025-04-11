import { User } from '@/fsd/entities/profile';
import { ChatDetailDemo } from "@/fsd/widgets/chat/ChatDetailDemo";

interface ChatIDPageProps {
    user?: User;
}

export const ChatIdDemoPage = () => {
    return (
        <>
            <ChatDetailDemo/>
        </>
    );
};
