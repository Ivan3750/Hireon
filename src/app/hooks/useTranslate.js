'use client'
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
export default function useTranslate() {
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
  return { translations, loading, lang, setLang };
}
