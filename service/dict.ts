import axiosInstance from '../plugins/axios';
import { UserRegisterRequest } from "@/fsd/shared/api/userApi";

const dictService = {
    getAllUniversities: async () => {
        try {
            const {data} = await axiosInstance.get('/dict/universities');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    getAllLanguages: async () => {
        try {
            const {data} = await axiosInstance.get('/dict/languages');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    getAllInterests: async () => {
        try {
            const {data} = await axiosInstance.get('/dict/interests');
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


};

export default dictService;
