import axiosInstance from '../plugins/axios';

const connectService = {
	getConnects: async () => {
		try {
			const { data } = await axiosInstance.get('/api/v1/connects');
			return [data, null];
		} catch (error) {
			return [null, error];
		}
	},

	getProfileById: async (id: number) => {
		try {
			const { data } = await axiosInstance.get(`/api/v1/connects/${id}`);
			return [data, null];
		} catch (error) {
			return [null, error];
		}
	},
};

export default connectService;
