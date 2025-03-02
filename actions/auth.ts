import authService from "@/service/auth";

const authActions = {
    login: async (values) => {
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
