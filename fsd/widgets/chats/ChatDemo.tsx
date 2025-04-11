"use client";
import { Layout } from "antd";
import style from './ui/Chat.module.scss'
import { useEffect, useState } from "react";
import { ChatListDemo } from "@/fsd/widgets/chats/ChatListDemo";

const {Content} = Layout;


interface Chat {
    "id": number,
    "authUserId": number,
    "firstName": string,
    "lastName": string,
    "birthDate": string,
    "description": string,
    "isOnline": boolean,
    "lastMessage": string
}

const chatList: Chat[] = [
    {
        id: 1,
        authUserId: 101, // предположим ID авторизованного пользователя
        firstName: 'Mei',
        lastName: 'Ying',
        birthDate: '1990-01-15',
        description: 'Colleague from Marketing',
        isOnline: false,
        lastMessage: 'Hey, are you coming to the meeting?'
    },
    {
        id: 2,
        authUserId: 102,
        firstName: 'Musa',
        lastName: 'Dlamini',
        birthDate: '1988-03-22',
        description: 'Project Manager',
        isOnline: true,
        lastMessage: 'Got it, thanks!'
    },
    {
        id: 3,
        authUserId: 103,
        firstName: 'Rohan',
        lastName: 'Verma',
        birthDate: '1992-11-05',
        description: 'Lead Developer',
        isOnline: false,
        lastMessage: "Let's merge the PR today."
    },
    {
        id: 4,
        authUserId: 104,
        firstName: 'Chloe',
        lastName: 'Matthews',
        birthDate: '1991-07-18',
        description: 'Design Team Lead',
        isOnline: true,
        lastMessage: 'The new campaign is ready to go.'
    },
    {
        id: 5,
        authUserId: 105,
        firstName: 'Rami',
        lastName: 'Al-Fahim',
        birthDate: '1985-09-30',
        description: 'CTO',
        isOnline: false,
        lastMessage: 'Can we discuss the new project?'
    }
];


export const ChatDemo = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, []);

    return (
        <Layout className={ style.layoutStylesChat }>
            <Content className={ style.ContentWrapper }>
                <ChatListDemo chats={ chatList } isLoading={ isLoading }/>
            </Content>
        </Layout>
    );
};
