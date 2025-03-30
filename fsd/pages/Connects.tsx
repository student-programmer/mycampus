import ConnectsPage from '../features/profile/ui/ConnectsPage';
import { User } from '@/fsd/entities/profile';
interface ConnectsProps {
	user?: User;
}

export const Connects = ({ user }: ConnectsProps) => {
	return <ConnectsPage currentUser={user} />;
};
