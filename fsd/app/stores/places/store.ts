import { create } from "zustand";
import placesActions from "@/actions/placesActions";
import { Place } from "@/fsd/entities/places";

interface PlacesState {
  placesList: Place[]; // Тип остается Place[]
  placesCategories: string[];
  placesKeyWords: string[];
  currentPlace: Place | null;
  fetchAllPlaces: () => Promise<void>;
  fetchPlaceById: (id: number) => Promise<void>;
  setCurrentPlace: (place: Place) => void;
  fetchPlacesCategories: () => void;
  fetchPlacesKeyWords: () => void;
  filteredPlacesParams: {
    name: string;
    keywords: string[];
    category: string[];
  };
  setFilteredPlacesParams: (params: any) => void;
}

export const usePlacesStore = create<PlacesState>((set) => ({
  placesList: [],
  placesCategories: [],
  placesKeyWords: [],
  filteredPlacesParams: {
    name: "",
    keywords: [],
    category: [],
  },
  currentPlace: null,

  fetchAllPlaces: async () => {
    const data = await placesActions.getAllPlaces();
    set({ placesList: data || [] });
  },

  fetchPlacesCategories: async () => {
    const data = await placesActions.getAllPlaces();
    const categories = data?.map((place) => place.category);
    set({ placesCategories: categories || [] });
  },

  fetchPlacesKeyWords: async () => {
    const data = await placesActions.getAllPlaces();
    const allKeywords =
      data?.flatMap((place) =>
        place.keywords.split(", ").map((keyword) => keyword.trim())
      ) || [];

    const uniqueKeywords = Array.from(new Set(allKeywords));

    set({ placesKeyWords: uniqueKeywords });
  },

  setFilteredPlacesParams: (params) => set({ filteredPlacesParams: params }),

  fetchPlaceById: async (id: number) => {
    const data = await placesActions.getPlaceById(id);
    set({ currentPlace: data });
  },

  setCurrentPlace: (place) => set({ currentPlace: place }),
}));
