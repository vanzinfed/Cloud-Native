import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mistral } from '@mistralai/mistralai';

const apiKey = 'Ylu1oN31YzftJyvA5mMVSaxQY0Nu5bN9'; // API key
const client = new Mistral({ apiKey: apiKey });

interface SystemMessage {
  role: 'system';
  content: string;
}

interface UserMessage {
  role: 'user';
  content: string;
}

interface AssistantMessage {
  role: 'assistant';
  content: string;
}

interface ToolMessage {
  role: 'tool';
  content: string;
}

type Message = SystemMessage | UserMessage | AssistantMessage | ToolMessage;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 Привет! Чем могу помочь вам сегодня?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: input }
    ];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const chatResponse = await client.chat.complete({
        model: 'mistral-large-latest',
        messages: newMessages,
        maxTokens: 150
      });

      if (chatResponse.choices && chatResponse.choices.length > 0) {
        const responseContent = chatResponse.choices[0].message.content;

        // Проверка что содержимое является строкой
        if (typeof responseContent === 'string') {
          const assistantMessage: AssistantMessage = {
            role: 'assistant',
            content: responseContent
          };
          setMessages([...newMessages, assistantMessage]);
        } else {
          console.error('Unexpected content type:', responseContent);
        }
      }
    } catch (error) {
      console.error('Error fetching chat response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-black">Чат с ИИ</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="h-96 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${msg.role === 'user' ? 'bg-gray-300' : 'bg-blue-200'} rounded-lg p-3 max-w-[80%]`}>
                      <p className={`text-sm ${msg.role === 'user' ? 'text-black' : 'text-blue-900'}`}>{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start justify-start">
                    <div className="bg-blue-200 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-blue-900">● ● ●</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2 text-black">
                <input
                  type="text"
                  placeholder="Введите сообщение..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  Ввести
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
