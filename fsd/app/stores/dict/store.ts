import { create } from "zustand/react";
import dictActions from "@/actions/dict";

interface DictItem {
    id: number,
    name: string,
}

interface DictState {
    LanguageList: DictItem[];
    UniversityList: DictItem[];
    InterestsList: DictItem[];
    StudyDirectionsList: DictItem[];
    fetchLanguages: () => Promise<void>;
    fetchUniversities: () => Promise<void>;
    fetchInterests: () => Promise<void>;
    fetchStudyDirections: () => Promise<void>;
}


export const useDictStore = create<DictState>((set) => ({
    LanguageList: [],
    UniversityList: [],
    InterestsList: [],
    StudyDirectionsList: [],

    fetchLanguages: async () => {
        try {
            const data = await dictActions.getAllLanguages();

            if (!data || data.length === 0) {
                console.warn('API вернул пустые данные');
                set({LanguageList: []}); // Оставляем список пустым
            } else {
                set({LanguageList: data});
            }
        } catch (error) {
            console.error('Ошибка при загрузке языков:', error);
            set({LanguageList: []}); // Оставляем список пустым в случае ошибки
        }
    },

    fetchUniversities: async () => {
        try {
            const data = await dictActions.getAllUniversities();

            if (!data) {
                console.warn('API вернул пустые данные');
                set({UniversityList: []}); // Оставляем текущий профиль пустым
            } else {
                set({UniversityList: data});
            }
        } catch (error) {
            console.error(`Ошибка при загрузке университетов`, error);
            set({UniversityList: []}); // Оставляем текущий профиль пустым в случае ошибки
        }
    },

    fetchInterests: async () => {
        try {
            const data = await dictActions.getAllInterests();

            if (!data) {
                console.warn('API вернул пустые данные');
                set({InterestsList: []});
            } else {
                set({InterestsList: data});
            }
        } catch (error) {
            console.error(`Ошибка при загрузке интересов:`, error);
            set({InterestsList: []});
        }
    },

    fetchStudyDirections: async () => {
        try {
            const data = await dictActions.getAllStudyDirections();

            if (!data) {
                console.warn('API вернул пустые данные');
                set({StudyDirectionsList: []});
            } else {
                set({StudyDirectionsList: data});
            }
        } catch (error) {
            console.error(`Ошибка при загрузке направлений исследований:`, error);
            set({StudyDirectionsList: []});
        }
    },

}))