import { create } from 'zustand';
import placesActions from '@/actions/placesActions';
import { Place } from '@/fsd/entities/places';

interface PlacesState {
	placesList: Place[]; // Тип остается Place[]
	currentPlace: Place | null;
	fetchAllPlaces: () => Promise<void>;
	fetchPlaceById: (id: number) => Promise<void>;
	setCurrentPlace: (place: Place) => void;
}

export const usePlacesStore = create<PlacesState>(set => ({
	placesList: [], // Инициализируем как пустой массив
	currentPlace: null,

	fetchAllPlaces: async () => {
		const data = await placesActions.getAllPlaces();
		set({ placesList: data || [] }); // Если data === null, используем пустой массив
	},

	fetchPlaceById: async (id: number) => {
		const data = await placesActions.getPlaceById(id);
		set({ currentPlace: data });
	},

	setCurrentPlace: place => set({ currentPlace: place }),
}));