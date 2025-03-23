import userService from "@/service/user";
import { UserRegisterActionsRequest, UserRegisterServiceRequest } from "@/fsd/shared/api/userApi";

const userActions = {
    register: async (values: UserRegisterActionsRequest) => {

        const changedValues: UserRegisterServiceRequest = {
            firstName: values.firstName,
            lastName: values.lastName,
            description: values.description,
            birthDate: values.birthDate,
            sex: values.sex,
            languages: values.languages,
            interests: values.interests,
            location: values.location,
            university: values.university,
            photo: values.photo,
            email: values.email,
            password: values.password,
        }

        const [data, error] = await userService.register(changedValues);

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default userActions;
