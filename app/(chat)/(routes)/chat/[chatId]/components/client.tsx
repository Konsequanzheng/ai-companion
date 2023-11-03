"use client";

import ChatHeader from "@/components/chat-header";
import { Companion, Message } from "@prisma/client";

import { useRouter } from "next/router";
import React, { useState } from "react";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient = ({ companion }: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>(companion.messages);
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
