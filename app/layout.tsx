import type { Metadata } from 'next';
import '../fsd/app/style/global.scss';
import { AppProviders } from '../fsd/app/providers';



export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
			>
				<AppProviders>
					{children}
				</AppProviders>
			</body>
		</html>
	);
}
