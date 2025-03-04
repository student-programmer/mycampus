import authService from "@/service/auth";
import { LoginRequest } from "@/fsd/shared/api/authApi";

const authActions = {
    login: async (values: LoginRequest) => {
        const [data, error] = await authService.login(values);

        if (error) {
            throw new Error(error);
        }
        return data;
    },

    profile: async () => {

        const [data, error] = await authService.profile();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default authActions;
