import userService from "@/service/user";
import { User } from "@/fsd/entities/profile";

const userActions = {

    getCurrentProfile: async (token: string): Promise<User | null> => {

        const [data, error] = await userService.getCurrentProfile(token);

        if (error) {
            throw new Error(error);
        }
        return data;
    },

};

export default userActions;
