import userService from "@/service/user";

const userActions = {
    register: async (values) => {
        const [data, error] = await userService.register(values);

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default userActions;
