'use client';

import { NavMenu } from '@/fsd/widgets/navMenu/NavMenu';
import React, { useEffect, useState } from 'react';
import userService from '@/service/user';
import { useRouter } from 'next/navigation';
import { Loader } from '@/fsd/common/Loader';
import { SocketProvider } from '@/contexts/SocketContext';
import { User } from '@/fsd/entities/profile';

interface BaseLayoutProps {
	Component: React.FC;
	navMenuOn: boolean;
	notAuthentication?: boolean;
}

export default function BaseLayout({
	Component,
	navMenuOn,
	notAuthentication = false,
}: BaseLayoutProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState<User | null>();

	useEffect(() => {
		const getCurrentUser = async (token: string | null) => {
			if (!token) {
				router.push('/');
				return;
			}

			const [data, error] = await userService.getCurrentProfile(token);
			if (error) {
				localStorage.removeItem('jwtToken');
				router.push('/');
			} else {
				setUser(data);
				setIsLoading(false);
			}
		};

		const token = localStorage.getItem('jwtToken');
		if (!notAuthentication) {
			getCurrentUser(token).then();
		}
		setIsLoading(false);
	}, [router]); // router добавлен в зависимости

	return (
		<SocketProvider userId={user?.id}>
			<div
				style={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				{isLoading ? (
					<Loader />
				) : (
					// @ts-ignore
					<Component user={user} />
				)}
				{navMenuOn && <NavMenu notAuthentication={notAuthentication}/>}
			</div>
		</SocketProvider>
	);
}
