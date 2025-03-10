import ProfilePage from '@/fsd/pages/ProfilePage';

export default function Page({ params }: { params: { id: string } }) {
	const id = parseInt(params.id, 10); // Преобразуем строку в число, если необходимо

	return <ProfilePage id={id} />; // Передаем id как пропс
}
