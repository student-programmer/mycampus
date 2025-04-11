import { create } from "zustand/react";
import { Chat } from "@/fsd/entities/chats";
import { Message } from "@/fsd/entities/chats/model/chats";
import { immer } from "zustand/middleware/immer";
import chatActions from "@/actions/chat";


interface ChatState {
    chatList: Chat[],
    messageList: Message[],
    receiverPhoto?: string,
    addMessage: (message: Message) => void;
    fetchChatList: (userId: number, setIsLoading: (isLoading: boolean) => void) => Promise<Chat[]>;
    fetchMessageList: (userId1: number, userId2: number) => void
}


export const useChatsStore = create<ChatState>()(immer((set) => ({
        chatList: [],
        messageList: [],

        addMessage: (message: Message) => set((state) => {
            state.messageList.push(message);
        }),

    fetchChatList: async (userId: number, setIsLoading: (isLoading: boolean) => void): Promise<Chat[]> => {
        try {
            setIsLoading(true);
            const data = await chatActions.getChatUsers(userId);
            const chats = data || [];
            set({ chatList: chats });
            setIsLoading(false);
            return chats;
        } catch (error) {

            console.error('Ошибка при загрузке чатов:', error);
            set({ chatList: [] });
            setIsLoading(false);
            return [];
        }
    },


    fetchMessageList: async (userId1: number, userId2: number) => {
            try {
                const data = await chatActions.getChatMessages(userId1, userId2);

                if (!data) {
                    console.warn('API вернул пустые данные');
                    set({messageList: []});
                } else {
                    set({messageList: data?.messages, receiverPhoto: data?.receiverPhoto});
                }
            } catch (error) {
                console.error(`Ошибка при загрузке интересов:`, error);
                set({chatList: []});
            }
        },
    }))
);
