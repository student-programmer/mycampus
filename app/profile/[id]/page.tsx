import ProfilePage from '@/fsd/pages/ProfilePage';
import PlacesPage from "@/fsd/pages/PlacesPage";
import BaseLayout from "@/fsd/app/BaseLayout";

export default function Page({params}: { params: { id: string } }) {
    const id = parseInt(params.id, 10); // Преобразуем строку в число, если необходимо

    return < BaseLayout Component={ ProfilePage } navMenuOn/>; // Передаем id как пропс
}
