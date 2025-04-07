'use client';

import PlacesDemoPage from '@/fsd/pages/PlacesDemoPage';
import BaseLayout from '@/fsd/app/BaseLayout';

export default function Page() {
	return <BaseLayout Component={PlacesDemoPage} navMenuOn notAuthentication />;
}
