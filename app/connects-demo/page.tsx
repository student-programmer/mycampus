'use client';

import BaseLayout from '@/fsd/app/BaseLayout';
import { PreConnects } from '@/fsd/pages/PreConnects';
export default function Page() {
	return <BaseLayout Component={PreConnects} navMenuOn notAuthentication/>;
}
