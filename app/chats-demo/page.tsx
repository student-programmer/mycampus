'use client'

import BaseLayout from "@/fsd/app/BaseLayout";
import { ChatDemoPage } from "@/fsd/pages/ChatDemoPage";

export default function Page() {
    return < BaseLayout Component={ ChatDemoPage } navMenuOn notAuthenticated/>;
}
