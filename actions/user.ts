import userService from "@/service/user";
import { UserRegisterRequest } from "@/fsd/shared/api/userApi";

const userActions = {
    register: async (values: UserRegisterRequest) => {
        const [data, error] = await userService.register(values);

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default userActions;
