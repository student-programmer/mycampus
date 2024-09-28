import { Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import style from "./profile.module.scss";
import { type User } from "../../../shared/types/index";
import users from "../../../shared/api/api";
import Image from "next/image";
import photoMen from "../../../../app/assets/MenPng.jpg";
import usaIcon from "../../../app/assets/usaICon.png";

const user: User = users[0];
const ProfilePage = () => {
  return (
    <div className={style.profileWrapper}>
      <div className={style.profileWrapperMain}>
        <div className={style.photoProfile}>
          <Image src={photoMen} alt="" className={style.photoProfileImage} />
          <div className={style.iconAndIcon}>
            <LeftOutlined className={style.LeftOutline} />
            <Breadcrumb
              items={[
                {
                  title: "Profile",
                },
                {
                  title: users[0].name,
                },
              ]}
            >
              <p className={style.textP}>Profile</p>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
