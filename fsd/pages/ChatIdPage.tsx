import ChatDetail from '../widgets/chat/ChatDetail';
import { User } from '@/fsd/entities/profile';

interface ChatIDPageProps {
	user?: User;
}

export const ChatIdPage = ({ user }: ChatIDPageProps) => {
	return (
		<>
			<ChatDetail user={user} />
		</>
	);
};
