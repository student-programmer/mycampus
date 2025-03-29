export interface Chat {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
    avatar: string; // Ссылка на аватар пользователя
    isActive: boolean;
    lastSeen: string;
}

export interface Message {
    id: number;
    sender: string;
    content: string;
}

