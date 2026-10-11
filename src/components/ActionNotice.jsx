import { createContext, useContext, useEffect, useRef, useState } from "react";

const NoticeContext = createContext(null);

export function NoticeProvider({ children }) {
  const [message, setMessage] = useState("");
  const timer = useRef(null);

  function notify(text) {
    setMessage(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(""), 4200);
  }

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  return (
    <NoticeContext.Provider value={{ notify }}>
      {children}
      {message ? (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-50 w-[min(100%-2rem,24rem)] -translate-x-1/2 rounded-2xl bg-brand-black px-4 py-3 text-sm leading-6 text-white shadow-lg"
        >
          {message}
        </div>
      ) : null}
    </NoticeContext.Provider>
  );
}

export function useNotice() {
  const context = useContext(NoticeContext);
  if (!context) {
    throw new Error("useNotice must be used inside NoticeProvider");
  }
  return context;
}
