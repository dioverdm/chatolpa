"use client";

import { createContext, useContext, useState } from "react";
import { useSocket } from "../context/SocketContext";

const ChatContext = createContext({
    // deleteMessage: () => undefined,
    // addMessage: () => undefined,
    // updateMessage: () => undefined,
    // createChat: () => undefined,
    // removeMessage: () => undefined,
});

const ChatProvider = ({ children }) => {
    const [currentChat, setCurrentChat] = useState("");
    const [loading, setLoading] = useState(false);

    //   useEffect(() => {
    //     const currChat = JSON.parse(localstorage.getItem("currChat"))
    //   }, [])

    const handleSetCurrChat = (data) => {
        setLoading(true);
        setCurrentChat(data);
        setLoading(false);
    };

    return (
        <ChatContext.Provider value={{ currentChat, handleSetCurrChat, loading }}>
            {children}
        </ChatContext.Provider>
    );
};

const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat };
