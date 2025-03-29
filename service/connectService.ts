import axiosInstance from '../plugins/axios';

const connectService = {
	getConnects: async () => {
		try {
			const { data } = await axiosInstance.get('connects');
			return [data, null];
		} catch (error) {
			return [null, error];
		}
	},

	getProfileById: async (id: number) => {
		try {
			const { data } = await axiosInstance.get(`connects/${id}`);
			return [data, null];
		} catch (error) {
			return [null, error];
		}
	},
};

export default connectService;
