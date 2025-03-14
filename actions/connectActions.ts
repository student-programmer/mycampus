import connectService from '@/service/connectService';

const connectActions = {
	getConnects: async () => {
		const [data, error] = await connectService.getConnects();

		if (error) {
			console.error('Ошибка при получении connects:', error);
			return [];
		}

		return data;
	},

	getProfileById: async (id: number) => {
		const [data, error] = await connectService.getProfileById(id);

		if (error) {
			console.error(`Ошибка при получении профиля ${id}:`, error);
			return null;
		}

		return data;
	},
};

export default connectActions;
