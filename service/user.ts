import axiosInstance from '../plugins/axios';

const userService = {
    register: async (values) => {
        try {
            const {data} = await axiosInstance.post('/user/register', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
