"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useContext, createContext } from "react";
const TranslateContext = createContext(null);
export function TranslateProvider({ children }) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [translations, setTranslations] = useState(null);
  const [lang, setLang] = useState(searchParams.get("lang") || "en");
  useEffect(() => {
    const loadLang = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) throw new Error("Failed to load translation");
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
        setTranslations(null);
      } finally {
        setLoading(false);
      }
    };
    loadLang();
  }, [lang]);
  return (
    <TranslateContext.Provider value={{ translations, loading, lang, setLang }}>
      {children}
    </TranslateContext.Provider>
  );
}
export function useTranslate() {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error("useTranslate must be used within a TranslateProvider");
  }
  return context;
}