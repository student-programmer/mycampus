import { create } from "zustand";
import { User } from "@/fsd/entities/profile";
import connectActions from "../../../../actions/connectActions";
import userActions from "@/actions/user";

interface ProfilesState {
  profileList: User[];
  currentProfile: User | null;
  fetchProfiles: () => Promise<void>;
  fetchProfileById: (id: number) => Promise<void>;
  fetchCurrentProfile: (token: string) => Promise<void>;
  setCurrentProfile: (user: User) => void;
  fetchProfilesByParams: (params: any) => Promise<void>;
}

export const useProfilesStore = create<ProfilesState>((set) => ({
  profileList: [], // Начальные данные - пустой массив
  currentProfile: null,

  // Получение списка профилей
  fetchProfiles: async () => {
    try {
      const data = await connectActions.getConnects();

      if (!data || data.length === 0) {
        console.warn("API вернул пустые данные");
        set({ profileList: [] }); // Оставляем список пустым
      } else {
        set({ profileList: data });
      }
    } catch (error) {
      console.error("Ошибка при загрузке профилей:", error);
      set({ profileList: [] }); // Оставляем список пустым в случае ошибки
    }
  },

  fetchProfilesByParams: async (params: any) => {
    try {
      const data = await connectActions.getConnectsByParams(params);

      if (!data || data.length === 0) {
        console.warn("API вернул пустые данные");
        set({ profileList: [] }); // Оставляем список пустым
      } else {
        set({ profileList: data });
      }
    } catch (error) {
      console.error("Ошибка при загрузке профилей:", error);
      set({ profileList: [] }); // Оставляем список пустым в случае ошибки
    }
  },

  fetchProfileById: async (id: number) => {
    try {
      const data = await connectActions.getProfileById(id);

      if (!data) {
        console.warn(`API не вернул данные для id=${id}`);
        set({ currentProfile: null }); // Оставляем текущий профиль пустым
      } else {
        set({ currentProfile: data });
      }
    } catch (error) {
      console.error(`Ошибка при загрузке профиля с id=${id}:`, error);
      set({ currentProfile: null }); // Оставляем текущий профиль пустым в случае ошибки
    }
  },

  fetchCurrentProfile: async (token: string): Promise<void> => {
    try {
      const data = await userActions.getCurrentProfile(token);
      set({ currentProfile: data || null });
    } catch (error) {
      console.error(`Ошибка при загрузке профиля:`, error);
      set({ currentProfile: null });
    }
  },

  // Установка текущего профиля вручную
  setCurrentProfile: (user) => set({ currentProfile: user }),
}));
