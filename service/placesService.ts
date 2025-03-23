import axiosInstance from '@/plugins/axios';
import { Place } from '@/fsd/entities/places';

const placesService = {
	// Получить все места
	getAllPlaces: async (): Promise<[Place[] | null, any]> => {
		try {
			const { data } = await axiosInstance.get('places');
			return [data, null];
		} catch (error) {
			console.error('Ошибка при получении списка мест:', error);
			return [null, error];
		}
	},

	// Получить место по ID
	getPlaceById: async (id: number): Promise<[Place | null, any]> => {
		try {
			const { data } = await axiosInstance.get(`places/${id}`);
			return [data, null];
		} catch (error) {
			console.error(`Ошибка при получении места ${id}:`, error);
			return [null, error];
		}
	},
};

export default placesService;
