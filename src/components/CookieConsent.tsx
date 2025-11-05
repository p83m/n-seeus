"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-[400px] bg-card border border-border/50 rounded-lg shadow-lg p-4 z-[9999] backdrop-blur">
      <p className="text-sm text-muted-foreground mb-3">
        Używamy plików cookies, aby poprawić działanie strony i analizować ruch. 
        Więcej informacji znajdziesz w naszej{" "}
        <Link href="/polityka-prywatnosci" className="text-primary underline">
          Polityce prywatności
        </Link>{" "}
        i{" "}
        <Link href="/polityka-cookies" className="text-primary underline">
          Polityce cookies
        </Link>.
      </p>
      <button
        onClick={acceptCookies}
        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition"
      >
        Akceptuję
      </button>
    </div>
  );
};

export default CookieConsent;