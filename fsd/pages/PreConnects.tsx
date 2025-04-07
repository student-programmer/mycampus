import PreConnectsPage from "@/fsd/features/profile/ui/PreConnects";
import { User } from '@/fsd/entities/profile';
interface PreConnectsProps {
	user?: User;
}
export const PreConnects = ({ user }: PreConnectsProps) => {
	return <PreConnectsPage user={user}/>;
};


