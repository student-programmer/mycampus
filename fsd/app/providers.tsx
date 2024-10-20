'use client'; // Указываем, что компонент выполняется на клиенте

import { Provider } from 'react-redux';
import { store } from './store';
import { NavMenu } from '../widgets/navMenu/NavMenu';
import { usePathname } from 'next/navigation'; // Импортируем usePathname для получения текущего пути

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname(); // Получаем текущий путь

	// Проверяем, если путь равен '/' (или любому другому исключаемому пути, например, '/login')
	const showNavMenu = pathname !== '/' && pathname !== '/login';

	return (
		<Provider store={store}>
			<>
				{children}
				{/* Отображаем NavMenu, только если путь не исключен */}
				{showNavMenu && <NavMenu />}
			</>
		</Provider>
	);
};
