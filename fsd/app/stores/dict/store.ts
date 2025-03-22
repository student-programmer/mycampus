import { create } from "zustand/react";

interface DictItem {
    id: number,
    name: string,
}

interface DictState {
    LanguageList: DictItem[];
    UniversityList: DictItem[];
    InterestsList: DictItem[];
}


export const useDictStore = create<DictState>((set) => ({
    LanguageList: [],
    UniversityList: [],
    InterestsList: [],
}))