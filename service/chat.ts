import axiosInstance from '../plugins/axios';

const chatService = {
  getChatUsers: async (userId) => {
    try {
      const {data} = await axiosInstance.get(`/chat/users/${userId}`);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },

  getChatMessages: async (userId1, userId2) => {
    try {
      const {data} = await axiosInstance.get(`/chat/${userId1}/${userId2}`);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },

};

export default chatService;
