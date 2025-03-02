import { getToken } from '@/utils/profile';
import userService from "@/service/user";

const userActions = {
    register: async () => {
        const token = getToken();
        const [data, error] = await userService.register(token);

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default userActions;
