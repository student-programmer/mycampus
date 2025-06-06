import chatService from "@/service/chat";


const dictActions = {
  getChatUsers: async (userId: number) => {
    const [data, error] = await chatService.getChatUsers(userId);

    if (error) {
      throw new Error(error);
    }
    return data;
  },
  getChatMessages: async (userId1: number, userId2: number) => {
    const [data, error] = await chatService.getChatMessages(userId1, userId2);

    if (error) {
      throw new Error(error);
    }
    return data;
  },
};

export default dictActions;
