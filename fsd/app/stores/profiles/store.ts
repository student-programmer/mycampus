import { create } from "zustand/react";
import { mockUsers, User } from "@/fsd/entities/profile";
import { mockUser } from "@/fsd/entities/profile/mock/mockUsers";


interface ProfilesState {
    profileList: User[],
    currentProfile: User,
}


export const useProfilesStore = create<ProfilesState>((set) => ({
    profileList: mockUsers,
    currentProfile: mockUser,
}))