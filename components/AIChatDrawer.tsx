
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const AIChatDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de la LMB Eje Este. ¿En qué puedo ayudarte hoy sobre el baloncesto en Aragua?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'Eres el Asistente Virtual experto de la Liga Metropolitana de Baloncesto (LMB) Eje Este en Aragua, Venezuela. Tu tono es profesional, entusiasta y deportivo. Ayudas con reglas FIBA, sedes en Aragua (Coliseo El Limón, Las Delicias), consejos de juego y datos generales de la liga. Sé breve y motivador.',
        }
      });

      const result = await chat.sendMessageStream({ message: userMsg });
      
      // Add initial empty model message
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullText = '';
      for await (const chunk of result) {
        const chunkText = chunk.text;
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Perdón, tuve un problema técnico. ¿Puedes repetir eso?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/40 transition-transform active:scale-90 animate-pulse"
      >
        <span className="material-symbols-outlined text-3xl">sports_basketball</span>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed bottom-0 left-0 right-0 z-50 max-w-xl mx-auto bg-surface-dark border-t border-white/10 rounded-t-[2.5rem] transition-transform duration-500 ease-out shadow-2xl ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ height: '80vh' }}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="font-black text-lg tracking-tight uppercase">CENTRAL ASISTENCIA</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white font-bold rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text || (isLoading && i === messages.length - 1 ? '...' : '')}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0a0a0a] border-t border-white/5 pb-10">
            <div className="flex gap-3 items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre la liga o FIBA..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary h-14 w-14 rounded-2xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatDrawer;
