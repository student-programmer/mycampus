import dictService from "@/service/dict";

const dictActions = {
    getAllInterests: async () => {
        const [data, error] = await dictService.getAllInterests();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
    getAllStudyDirections: async () => {
        const [data, error] = await dictService.getAllStudyDirections();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
    getAllUniversities: async () => {
        const [data, error] = await dictService.getAllUniversities();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
    getAllLanguages: async () => {
        const [data, error] = await dictService.getAllLanguages();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
    getAllCountries: async () => {
        const [data, error] = await dictService.getAllCountries();

        if (error) {
            throw new Error(error);
        }
        return data;
    },
};

export default dictActions;
