import axiosInstance from '../plugins/axios';
import { UserRegisterServiceRequest } from "@/fsd/shared/api/userApi";

const userService = {
    register: async (values: UserRegisterServiceRequest) => {
        try {
            const {data} = await axiosInstance.post('/user/register', values);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default userService;
