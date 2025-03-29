import { create } from "zustand/react";
import { Chat, mockChats } from "@/fsd/entities/chats";
import { Message } from "@/fsd/entities/chats/model/chats";
import { messageListMock } from "@/fsd/entities/chats/mock/chats";
import { immer } from "zustand/middleware/immer";


interface ChatState {
    chatList: Chat[],
    messageList: Message[],
    addMessage: (message: Message) => void;
}


export const useChatsStore = create<ChatState>()(immer((set) => ({
        chatList: mockChats,
        messageList: messageListMock,

        addMessage: (message: Message) => set((state) => {
            state.messageList.push(message);
        }),

        fetchChatList: async () => {
            // Заглушка
        },

        fetchMessageList: async () => {
            // Заглушка
        },
    }))
);