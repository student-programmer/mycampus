import placesService from '../service/placesService';

const placesActions = {
	// Получить список всех мест
	getAllPlaces: async () => {
		const [data, error] = await placesService.getAllPlaces();

		if (error) {
			console.error('Ошибка при получении списка мест:', error);
			return [];
		}

		return data;
	},

	// Получить место по ID
	getPlaceById: async (id: number) => {
		const [data, error] = await placesService.getPlaceById(id);

		if (error) {
			console.error(`Ошибка при получении места ${id}:`, error);
			return null;
		}

		return data;
	},
};

export default placesActions;
