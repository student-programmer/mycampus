import BaseLayout from "@/fsd/app/BaseLayout";
import ProfileDemoPage from "@/fsd/pages/ProfileDemoPage";

export default function Page() {

    return < BaseLayout Component={ ProfileDemoPage } navMenuOn notAuthentication/>;
}
