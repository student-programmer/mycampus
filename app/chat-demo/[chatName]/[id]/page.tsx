'use client'

import BaseLayout from "@/fsd/app/BaseLayout";
import { ChatIdDemoPage } from "@/fsd/pages/ChatIdDemoPage";


export default function Page() {
    return < BaseLayout Component={ ChatIdDemoPage } navMenuOn notAuthenticated/>;
}
