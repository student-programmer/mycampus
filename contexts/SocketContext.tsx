'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

// Типизация сокета
interface SocketContextType {
	socket: Socket | null;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = (): SocketContextType => {
	const context = useContext(SocketContext);
	if (!context) {
		throw new Error('useSocket must be used within a SocketProvider');
	}
	return context;
};

export const SocketProvider: React.FC<{ userId: number | undefined, children: React.ReactNode }> = ({
	userId,
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		if (userId) {
			const socketInstance = io(process.env.NEXT_PUBLIC_BASE_URL, {
				query: { userId },
			});
			console.log('Socket connected successfully!');
			setSocket(socketInstance);

			// Очищаем сокет при размонтировании компонента
			return () => {
				socketInstance.disconnect();
			};
		}
	}, [userId]);

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};
