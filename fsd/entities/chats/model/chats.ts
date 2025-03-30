export interface Chat {
    "id": number,
    "authUserId": number,
    "firstName": string,
    "lastName": string,
    "birthDate": string,
    "description": string,
    "isOnline": boolean
    "lastMessage": string
}

export interface Message {
    "id": string,
    "content": string,
    "senderId": number,
    "receiverId": number,
    "createdAt": string
}

