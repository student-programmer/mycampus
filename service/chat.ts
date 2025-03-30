import axiosInstance from '../plugins/axios';

const chatService = {
  getChatUsers: async (userId: number) => {
    try {
      const {data} = await axiosInstance.get(`/chat/users/${userId}`);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },

  getChatMessages: async (userId1: number, userId2: number) => {
    try {
      const {data} = await axiosInstance.get(`/chat/${userId1}/${userId2}`);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  },

};

export default chatService;
