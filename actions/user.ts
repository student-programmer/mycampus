import userService from "@/service/user";
import { User } from "@/fsd/entities/profile";
import { PasswordUpdateAction, UserUpdateActionsRequest } from "@/fsd/shared/api/userApi";

const userActions = {

    getCurrentProfile: async (token: string): Promise<User | null> => {

        const [data, error] = await userService.getCurrentProfile(token);

        if (error) {
            throw new Error(error);
        }
        return data;
    },

    update: async (token: string, values: UserUpdateActionsRequest) => {
        const [data, error] = await userService.update(token, values);

        if (error) {
            throw error;
        }
        return data;
    },

    updatePassword: async (token: string, values: PasswordUpdateAction) => {
        const changedVal = {
            password: values.password
        }

        const [data, error] = await userService.updatePassword(token, changedVal);

        if (error) {
            throw error;
        }
        return data;
    }

};

export default userActions;
