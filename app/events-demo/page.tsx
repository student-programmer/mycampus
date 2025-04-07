'use client'

import BaseLayout from "@/fsd/app/BaseLayout";
import EventsDemo from '@/fsd/pages/EventsDemo';


export default function Page() {
	return < BaseLayout Component={ EventsDemo } navMenuOn notAuthentication/>;
}
