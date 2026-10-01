'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackBotDemoQuery, trackWhatsAppClick } from '@/lib/analytics';
import {
  Send,
  Bot,
  Sparkles,
  Database,
  ArrowRight,
  Cpu,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isRagMatch?: boolean;
}

export const BotSimulator: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const [activeDatasetKey, setActiveDatasetKey] = useState<'greennst' | 'pssou'>('greennst');
  const activeDataset = PORTFOLIO_DATA.botDatasets[activeDatasetKey];

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcome =
      activeDatasetKey === 'greennst'
        ? lang === 'hi'
          ? 'नमस्ते! 🙏 मैं Green NST Agro Industries का WhatsApp AI सहायक हूँ। आप मुझसे जैविक खाद, कीटनाशक, बीज या थोक डीलरशिप के बारे में हिंदी या English में पूछ सकते हैं।'
          : 'Hello! 👋 I am the WhatsApp AI assistant for Green NST Agro Industries. You can ask me about bio-fertilizers, pest control, seed varieties, or dealer terms in English or Hindi.'
        : lang === 'hi'
        ? 'नमस्ते! 🙏 मैं पं. सुंदरलाल शर्मा मुक्त विश्वविद्यालय (PSSOU) का AI प्रवेश सहायक हूँ। आप B.Ed/D.El.Ed, PG कोर्स, फीस, पात्रता या प्रवेश प्रक्रिया के बारे में पूछ सकते हैं।'
        : 'Hello! 👋 I am the AI Admissions Assistant for Pt. Sundarlal Sharma Open University (PSSOU). Feel free to ask about B.Ed eligibility, courses, fees, or application procedures.';

    setMessages([
      {
        id: 'msg-welcome',
        sender: 'bot',
        text: welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [activeDatasetKey, lang]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    trackBotDemoQuery(activeDatasetKey, query, lang);

    setTimeout(() => {
      const qLower = query.toLowerCase();
      const matchedItem = activeDataset.kb.find((item) =>
        item.keywords.some((kw) => qLower.includes(kw.toLowerCase()))
      );

      let botResponse = '';
      if (matchedItem) {
        botResponse = lang === 'hi' ? matchedItem.answerHi : matchedItem.answerEn;
      } else {
        botResponse = lang === 'hi' ? activeDataset.fallback.hi : activeDataset.fallback.en;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isRagMatch: Boolean(matchedItem),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleCustomBotCTA = () => {
    trackWhatsAppClick('bot_demo_section', 'I want a WhatsApp AI bot for my business');
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
      'Hi Mayur, I tested your WhatsApp AI Bot demo. I want a similar bot trained on my company data. How do we start?'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="bot-demo" className="py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'hi' ? 'इंटरएक्टिव लाइव अनुभव' : 'Live Interactive Demo'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.liveDemoTitle}
          </h2>
          <p className="mt-3 text-base text-palette-indigo font-medium">
            {t.liveDemoSubtitle}
          </p>
        </div>

        {/* Top Architecture Workflow Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-palette-taupe flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-2 text-palette-dark font-bold">
            <Cpu className="w-4 h-4 text-palette-indigo flex-shrink-0" />
            <span>{lang === 'hi' ? 'RAG आर्किटेक्चर:' : 'How RAG Works:'}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-palette-indigo font-semibold">
            <span className="px-3 py-1 rounded-lg bg-palette-cream text-palette-dark border border-palette-taupe">
              1. Your PDFs / Excel / FAQs
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-palette-indigo hidden sm:inline" />
            <span className="px-3 py-1 rounded-lg bg-palette-cream text-palette-dark border border-palette-taupe">
              2. Vector Embeddings
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-palette-indigo hidden sm:inline" />
            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300">
              3. WhatsApp Cloud API
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-palette-indigo hidden sm:inline" />
            <span className="px-3 py-1 rounded-lg bg-palette-dark text-palette-cream">
              4. 24/7 Accurate Reply
            </span>
          </div>
        </div>

        {/* Main Grid: Simulator + Cost Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chat Mockup (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-palette-taupe overflow-hidden shadow-xl">
            {/* WhatsApp Header */}
            <div className="p-4 bg-palette-dark text-palette-cream flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-palette-dark" />
                </div>
                <div>
                  <div className="text-sm font-bold flex items-center gap-2 text-palette-cream">
                    <span>{activeDataset.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/20 text-palette-cream border border-white/30">
                      RAG Active
                    </span>
                  </div>
                  <div className="text-xs text-emerald-300 font-medium">Online • Typically replies instantly</div>
                </div>
              </div>

              {/* Dataset Selector Tabs */}
              <div className="flex gap-1 p-1 bg-palette-indigo rounded-xl">
                <button
                  onClick={() => setActiveDatasetKey('greennst')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeDatasetKey === 'greennst'
                      ? 'bg-palette-cream text-palette-dark shadow'
                      : 'text-palette-cream/80 hover:text-white'
                  }`}
                >
                  Green NST
                </button>
                <button
                  onClick={() => setActiveDatasetKey('pssou')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeDatasetKey === 'pssou'
                      ? 'bg-palette-cream text-palette-dark shadow'
                      : 'text-palette-cream/80 hover:text-white'
                  }`}
                >
                  PSSOU Uni
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 sm:p-5 h-[360px] overflow-y-auto space-y-4 bg-palette-cream/40 bg-grid-pattern">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-palette-dark text-palette-cream rounded-br-none shadow-md'
                        : 'bg-white text-palette-dark rounded-bl-none border border-palette-taupe shadow-sm font-medium'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <div
                      className={`text-[10px] mt-1.5 flex items-center justify-end gap-1 ${
                        msg.sender === 'user' ? 'text-palette-taupe' : 'text-palette-indigo'
                      }`}
                    >
                      {msg.isRagMatch && (
                        <span className="text-emerald-700 font-mono text-[9px] font-bold mr-1">
                          ✓ Verified Source
                        </span>
                      )}
                      <span>{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 p-3 bg-white rounded-2xl rounded-bl-none w-24 border border-palette-taupe">
                  <span className="w-2 h-2 rounded-full bg-palette-indigo animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-palette-indigo animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-palette-indigo animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Sample Questions */}
            <div className="p-3.5 bg-palette-cream/80 border-t border-palette-taupe">
              <div className="text-[11px] font-bold text-palette-dark mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-palette-indigo" />
                <span>{t.askSample}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDataset.sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(lang === 'hi' ? q.hi : q.en)}
                    className="text-left px-3 py-1.5 rounded-xl bg-white hover:bg-palette-cream text-palette-dark text-xs font-semibold border border-palette-taupe hover:border-palette-indigo transition-all truncate max-w-full shadow-sm"
                  >
                    {lang === 'hi' ? q.hi : q.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3.5 bg-white border-t border-palette-taupe flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder={
                  lang === 'hi'
                    ? 'अपना सवाल हिंदी या अंग्रेजी में यहाँ लिखें...'
                    : 'Type a customer query in English or Hindi...'
                }
                className="flex-1 bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-2.5 text-sm text-palette-dark placeholder-palette-indigo/60 focus:outline-none focus:border-palette-dark font-medium"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className="p-3 rounded-xl bg-palette-dark hover:bg-palette-indigo disabled:opacity-40 text-palette-cream transition-all shadow-md"
                title="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Cost Comparison & Business Value (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border-2 border-palette-taupe shadow-xl">
              <h3 className="text-xl font-bold text-palette-dark font-display mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-palette-indigo" />
                <span>{lang === 'hi' ? 'लागत और बचत की सच्चाई' : 'The Real Cost Advantage'}</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                  <div className="font-bold text-red-900 text-xs uppercase mb-1">
                    ❌ Traditional Chatbot SaaS Tools
                  </div>
                  <p className="text-xs text-red-950 font-medium">
                    Charge ₹5,000 to ₹15,000 every single month just for software subscription, even if nobody messages.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="font-bold text-emerald-900 text-xs uppercase mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>✓ Our Custom RAG Architecture</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-emerald-950 font-medium mt-2">
                    <li>• One-time setup fee (Starting from ₹12,499)</li>
                    <li>• 1,000 free Meta service conversations/month</li>
                    <li>• Pay Meta directly only for extra volume (~₹0.35/chat)</li>
                    <li>• 100% data privacy: your data stays yours</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-palette-taupe">
                <button
                  onClick={handleCustomBotCTA}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-palette-dark hover:bg-palette-indigo text-palette-cream font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>
                    {lang === 'hi'
                      ? 'मेरे व्यवसाय के लिए बॉट बनवाएं'
                      : 'Build a WhatsApp Bot for My Business'}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Human Handover Guarantee */}
            <div className="p-5 rounded-2xl bg-white border border-palette-taupe flex items-start gap-3.5 shadow-sm">
              <PhoneCall className="w-5 h-5 text-palette-dark flex-shrink-0 mt-0.5" />
              <div className="text-xs text-palette-indigo">
                <strong className="text-palette-dark block text-xs font-bold mb-0.5">
                  {lang === 'hi' ? 'लाइव ह्यूमन हैंडओवर गारंटी' : 'Live Human Handover Fallback'}
                </strong>
                Whenever a customer asks for a discount negotiation or complex custom order, the bot automatically pings your personal phone with a summary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
