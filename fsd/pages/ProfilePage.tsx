import React from 'react';
import Profile from '../widgets/profile/Profile';
import { user } from '../entities/profile/mock/users';

const ProfilePage = () => {
	return <Profile user={user} />;
};

export default ProfilePage;
