import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm Shahryar's AI assistant. I can help you learn about his work, projects, skills, and answer any questions you might have. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Google Gemini AI model
  const genAI = useMemo(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey) {
      return new GoogleGenerativeAI(apiKey);
    }
    return null;
  }, []);


  const model = useMemo(() => {
    if (genAI) {
      return genAI.getGenerativeModel({ model: "gemini-pro" });
    }
    return null;
  }, [genAI]);

  // System prompt for client interaction
  const systemPrompt = `You are a professional AI assistant representing Shahryar, an Associate Software Engineer and Full Stack Developer. Your role is to help potential clients and visitors understand Shahryar's expertise and services.

Key Information about Shahryar:
- Position: Associate Software Engineer at Nitensclue (Aug 2025 – Present)
- Education: BS Computer Science from COMSATS University Islamabad (CUI '25)
- Expertise: Full Stack Development (MERN, Next.js & FastAPI), React Native, AI & ML Solutions, Computer Vision (YOLO & OpenCV)
- Notable Projects: SafeSitePlus (AI-powered construction site monitoring), FloodAware, AI Career Coach, AI Finance Platform, MERN Real-Estate

Guidelines for Client Interaction:
1. Be professional, friendly, and helpful
2. Highlight Shahryar's technical skills and experience
3. Discuss his projects and achievements when relevant
4. If asked about services, mention: Web Development, Mobile App Development, AI/ML Solutions, Computer Vision Projects
5. For project inquiries, provide brief overviews and direct to his portfolio
6. Be concise but informative
7. If asked about availability or rates, politely suggest they use the contact form for detailed discussions
8. Always maintain a professional tone suitable for business inquiries

Answer questions naturally and conversationally while staying focused on Shahryar's professional profile and services.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading || !model) return;

    const userMessage = input.trim();
    setInput('');
    setLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);

    try {
      // Create a chat session with history
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: systemPrompt }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I will help represent Shahryar professionally." }],
          },
          // Add previous messages to history
          ...messages.map(msg => ({
            role: msg.role === 'user' ? "user" : "model",
            parts: [{ text: msg.content }]
          }))
        ],
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      // Send the new message and get response
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const botResponse = response.text() || 
        "I apologize, but I'm having trouble processing that right now. Please try rephrasing your question.";

      setMessages([...newMessages, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: "I apologize, but I'm experiencing technical difficulties. Please try again later or use the contact form to reach out directly."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaRobot className="text-xl" />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[360px] md:w-[380px] h-[70vh] max-h-[80vh] bg-tertiary rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-purple-500/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Shahryar's Assistant</h3>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-black-100 text-white border border-purple-500/20'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.role === 'assistant' && (
                        <FaRobot className="text-purple-400 mt-1 flex-shrink-0" />
                      )}
                      {msg.role === 'user' && (
                        <FaUser className="text-white/80 mt-1 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-black-100 text-white border border-purple-500/20 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple-500/20 bg-black-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-tertiary text-white px-4 py-2 rounded-lg outline-none border border-purple-500/20 focus:border-purple-500 text-sm"
                  disabled={loading || !model}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim() || !model}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                </button>
              </div>
              {!model && (
                <p className="text-red-400 text-xs mt-2">API key not configured. Please check your environment variables.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
