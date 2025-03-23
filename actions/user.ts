const userActions = {

    getCurrentProfile: async () => {

        const [data, error] = await userActions.getCurrentProfile();

        if (error) {
            throw new Error(error);
        }
        return data;
    },

};

export default userActions;
