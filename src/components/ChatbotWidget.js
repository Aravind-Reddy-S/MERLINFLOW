'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Bot, 
  User, 
  ExternalLink, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const INITIAL_SUGGESTIONS = [
  "🏢 Real Estate 3D inventory & RERA billing",
  "💼 Enterprise ERP & Multi-GST capabilities",
  "🎓 School IMS core modules & fee collection",
  "💊 Medical ERP & FEFO expiry watchdog",
  "🍽️ Restaurant ERP live table grid & KDS",
  "💰 Pricing plans overview"
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! 👋 I'm **Merlin AI**, your 24/7 intelligent solutions consultant for **MerlinFlow Technologies**.\n\nHow can I help you today? You can ask me about our **Real Estate CRM**, **Enterprise ERP**, **School IMS**, **Medical ERP**, **Restaurant POS**, **E-Commerce Suite**, pricing, or schedule a live demo!"
    }
  ]);
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading, suggestions]);

  const handleSend = async (textToSend) => {
    const query = typeof textToSend === 'string' ? textToSend : inputValue;
    if (!query.trim() || isLoading) return;

    const userMessage = { role: 'user', content: query.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
      
      if (data.suggestions && Array.isArray(data.suggestions) && data.suggestions.length > 0) {
        setSuggestions(data.suggestions);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I ran into a temporary connection issue. You can reach our team directly at **+91 83743 73753** / **+91 82477 16878** or **hello@merlinflow.in** for immediate assistance!"
        }
      ]);
      setSuggestions([
        "📅 How can I book a live demo?",
        "🏢 Show Real Estate CRM features",
        "💰 Pricing plans overview"
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Chat reset! How can I assist you with MerlinFlow today?"
      }
    ]);
    setSuggestions(INITIAL_SUGGESTIONS);
  };

  const formatInlineText = (text, lineIdx) => {
    // Replace markdown links [title](url) and bold **text**
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const segments = [];
    let lastIndex = 0;
    let linkMatch;

    // Helper for bold rendering
    const renderBold = (str, keyPrefix) => {
      const boldRegex = /\*\*(.*?)\*\*/g;
      const bSegments = [];
      let bLastIndex = 0;
      let bMatch;

      while ((bMatch = boldRegex.exec(str)) !== null) {
        if (bMatch.index > bLastIndex) {
          bSegments.push(str.substring(bLastIndex, bMatch.index));
        }
        bSegments.push(
          <strong key={`${keyPrefix}-b-${bMatch.index}`} className="font-semibold text-white">
            {bMatch[1]}
          </strong>
        );
        bLastIndex = boldRegex.lastIndex;
      }
      if (bLastIndex < str.length) {
        bSegments.push(str.substring(bLastIndex));
      }
      return bSegments.length > 0 ? bSegments : str;
    };

    while ((linkMatch = linkRegex.exec(text)) !== null) {
      if (linkMatch.index > lastIndex) {
        segments.push(renderBold(text.substring(lastIndex, linkMatch.index), `${lineIdx}-${lastIndex}`));
      }
      const label = linkMatch[1];
      const url = linkMatch[2];
      segments.push(
        <a
          key={`${lineIdx}-link-${linkMatch.index}`}
          href={url}
          target={url.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 underline font-medium inline-flex items-center gap-0.5"
        >
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      segments.push(renderBold(text.substring(lastIndex), `${lineIdx}-${lastIndex}`));
    }

    return segments.length > 0 ? segments : text;
  };

  const formatMessageText = (content) => {
    if (!content) return null;
    const lines = content.split('\n');
    
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-2" />;
      }

      // Ignore markdown table border lines like |---|---|
      if (/^\|[-|\s]+\|$/.test(trimmed)) {
        return null;
      }

      // Markdown Headings
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-sm font-bold text-emerald-400 mt-2 mb-1">
            {formatInlineText(trimmed.replace('### ', ''), idx)}
          </h4>
        );
      }
      if (trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
        return (
          <h3 key={idx} className="text-sm sm:text-base font-extrabold text-white mt-2.5 mb-1 border-b border-white/10 pb-0.5">
            {formatInlineText(trimmed.replace(/^#+\s/, ''), idx)}
          </h3>
        );
      }

      // Bullet list items
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
        const itemText = trimmed.replace(/^[-*•]\s+/, '');
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 pl-1">
            <span className="text-emerald-400 font-bold text-xs mt-0.5">●</span>
            <div className="flex-1 leading-relaxed text-slate-200">
              {formatInlineText(itemText, idx)}
            </div>
          </div>
        );
      }

      // Numbered list items
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 pl-1">
            <span className="text-emerald-400 font-bold text-xs mt-0.5">{numMatch[1]}.</span>
            <div className="flex-1 leading-relaxed text-slate-200">
              {formatInlineText(numMatch[2], idx)}
            </div>
          </div>
        );
      }

      // Table rows formatting
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed.split('|').map(c => c.trim()).filter(Boolean);
        return (
          <div key={idx} className="flex flex-wrap gap-2 my-1 py-1 px-2 bg-slate-800/40 rounded border border-white/5 text-xs">
            {cells.map((cell, cIdx) => (
              <span key={cIdx} className="leading-tight">
                {formatInlineText(cell, `${idx}-${cIdx}`)}
              </span>
            ))}
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 leading-relaxed text-slate-200">
          {formatInlineText(trimmed, idx)}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="merlin-chat-launcher-wrap">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="merlin-chat-launcher"
          aria-label="Open Merlin AI Assistant"
        >
          <div className="launcher-pulse-ring"></div>
          {isOpen ? (
            <X size={18} className="text-white" />
          ) : (
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-300 animate-pulse" />
              <Bot size={18} className="text-white" />
            </div>
          )}
          {!isOpen && (
            <span className="launcher-label">Ask Merlin AI</span>
          )}
        </motion.button>
      </div>

      {/* Glassmorphic Chat Drawer / Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="merlin-chat-window"
          >
            {/* Window Header */}
            <div className="chat-window-header">
              <div className="header-left">
                <div className="avatar-wrap">
                  <Bot size={16} className="text-emerald-400" />
                  <span className="status-dot"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="header-title">Merlin AI</h3>
                    <span className="copilot-badge">Copilot</span>
                  </div>
                  <p className="header-sub">MerlinFlow Technologies • Telangana</p>
                </div>
              </div>

              <div className="header-actions">
                <button
                  onClick={handleReset}
                  className="header-icon-btn"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw size={13} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="header-icon-btn"
                  title="Close chat"
                  aria-label="Close chat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="chat-messages-container">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`chat-message-row ${msg.role === 'user' ? 'user' : 'assistant'}`}
                >
                  <div className="message-avatar">
                    {msg.role === 'user' ? (
                      <User size={12} className="text-slate-200" />
                    ) : (
                      <Bot size={12} className="text-emerald-400" />
                    )}
                  </div>
                  <div className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="formatted-content text-slate-200 text-xs sm:text-sm">
                        {formatMessageText(msg.content)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="chat-message-row assistant">
                  <div className="message-avatar">
                    <Bot size={12} className="text-emerald-400" />
                  </div>
                  <div className="message-bubble assistant-bubble typing-bubble">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Continuous Interactive Suggestions Strip */}
            {suggestions && suggestions.length > 0 && (
              <div className="dynamic-suggestions-bar">
                <div className="suggestions-header">
                  <Sparkles size={11} className="text-emerald-400" />
                  <span>Suggested Follow-ups</span>
                </div>
                <div className="suggestions-scroll">
                  {suggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      disabled={isLoading}
                      onClick={() => handleSend(sug)}
                      className="suggestion-chip"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="chat-input-area">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="chat-input-form"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Merlin AI anything about our products..."
                  className="chat-input-field"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="chat-send-btn"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>

              <div className="chat-footer-note">
                <span>Direct Support: </span>
                <a href="tel:+918374373753" className="text-emerald-400 hover:underline font-medium">
                  +91 83743 73753
                </a>
                <span> • </span>
                <a href="tel:+918247716878" className="text-emerald-400 hover:underline font-medium">
                  +91 82477 16878
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* LAUNCHER BUTTON */
        .merlin-chat-launcher-wrap {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }

        .merlin-chat-launcher {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #059669 100%);
          border: 1.25px solid rgba(52, 211, 153, 0.4);
          color: #ffffff;
          padding: 0.52rem 0.95rem;
          border-radius: 50px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 0 12px rgba(5, 150, 105, 0.25);
          cursor: pointer;
          font-weight: 700;
          font-size: 0.82rem;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .merlin-chat-launcher:hover {
          border-color: #34d399;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 18px rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }

        .launcher-pulse-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0) 70%);
          animation: pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          z-index: -1;
          pointer-events: none;
        }

        @keyframes pulseRing {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.98);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.04);
          }
        }

        .launcher-label {
          letter-spacing: 0.01em;
          font-size: 0.8rem;
        }

        /* CHAT WINDOW */
        .merlin-chat-window {
          position: fixed;
          bottom: 76px;
          right: 20px;
          width: 360px;
          max-width: calc(100vw - 28px);
          height: 520px;
          max-height: calc(100vh - 100px);
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.6), 0 0 24px rgba(5, 150, 105, 0.15);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
        }

        .chat-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: rgba(30, 41, 59, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .avatar-wrap {
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(52, 211, 153, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-dot {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          border: 1.5px solid #0f172a;
          box-shadow: 0 0 5px #10b981;
        }

        .header-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
        }

        .copilot-badge {
          font-size: 0.58rem;
          font-weight: 800;
          background: linear-gradient(135deg, #059669, #0d9488);
          color: #ffffff;
          padding: 0.12rem 0.4rem;
          border-radius: 50px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .header-sub {
          font-size: 0.65rem;
          color: #94a3b8;
          margin: 0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .header-icon-btn {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.2s;
        }

        .header-icon-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        /* MESSAGES */
        .chat-messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 0.9rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .chat-messages-container::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }

        .chat-message-row {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
          max-width: 92%;
        }

        .chat-message-row.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chat-message-row.assistant {
          align-self: flex-start;
        }

        .message-avatar {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .message-bubble {
          padding: 0.65rem 0.85rem;
          border-radius: 14px;
          font-size: 0.82rem;
          line-height: 1.45;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .user-bubble {
          background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
          color: #ffffff;
          border-bottom-right-radius: 3px;
          box-shadow: 0 3px 10px rgba(5, 150, 105, 0.25);
        }

        .assistant-bubble {
          background: rgba(30, 41, 59, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
          border-bottom-left-radius: 3px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .typing-dots {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0.15rem 0.3rem;
        }

        .typing-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
          animation: bounceDots 1.4s infinite ease-in-out both;
        }

        .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounceDots {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        /* CONTINUOUS DYNAMIC SUGGESTIONS */
        .dynamic-suggestions-bar {
          padding: 0.4rem 0.85rem 0.45rem 0.85rem;
          background: rgba(15, 23, 42, 0.7);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .suggestions-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.62rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
        }

        .suggestions-scroll {
          display: flex;
          gap: 0.35rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 3px;
        }

        .suggestions-scroll::-webkit-scrollbar {
          height: 3px;
        }

        .suggestions-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .suggestion-chip {
          white-space: nowrap;
          font-size: 0.68rem;
          font-weight: 600;
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.28rem 0.7rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .suggestion-chip:hover:not(:disabled) {
          background: rgba(16, 185, 129, 0.18);
          border-color: rgba(52, 211, 153, 0.5);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .suggestion-chip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* INPUT AREA */
        .chat-input-area {
          padding: 0.6rem 0.85rem 0.55rem 0.85rem;
          background: rgba(15, 23, 42, 0.85);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chat-input-form {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(30, 41, 59, 0.9);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 0.25rem 0.35rem 0.25rem 0.75rem;
          transition: border-color 0.2s;
        }

        .chat-input-form:focus-within {
          border-color: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);
        }

        .chat-input-field {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.8rem;
        }

        .chat-input-field::placeholder {
          color: #64748b;
        }

        .chat-send-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #10b981;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #059669;
          transform: scale(1.05);
        }

        .chat-send-btn:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: #64748b;
          cursor: not-allowed;
        }

        .chat-footer-note {
          text-align: center;
          font-size: 0.62rem;
          color: #64748b;
          margin-top: 0.35rem;
        }

        /* MOBILE ADJUSTMENTS */
        @media (max-width: 640px) {
          .merlin-chat-launcher-wrap {
            bottom: 14px;
            right: 14px;
          }

          .merlin-chat-launcher {
            padding: 0.5rem 0.75rem;
            font-size: 0.78rem;
          }

          .launcher-label {
            display: none;
          }

          .merlin-chat-window {
            bottom: 68px;
            right: 10px;
            left: 10px;
            width: auto;
            max-width: none;
            height: calc(100vh - 110px);
            max-height: 520px;
            border-radius: 18px;
          }
        }
      `}</style>
    </>
  );
}
