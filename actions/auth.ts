import authService from "@/service/auth";
import { LoginRequest, UserRegisterServiceRequest } from "@/fsd/shared/api/authApi";
import { UserRegisterActionsRequest } from "@/fsd/shared/api/userApi";

const authActions = {
    login: async (values: LoginRequest) => {
        const [data, error] = await authService.login(values);

        if (error) {
            throw error;
        }
        return data;
    },

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
            countryId: values.countryId,
            studyDirection: values.studyDirection,
            photo: values.photo,
            email: values.email,
            password: values.password,
        }

        const [data, error] = await authService.register(changedValues);

        if (error) {
            throw error;
        }

        return data;
    },
};

export default authActions;
