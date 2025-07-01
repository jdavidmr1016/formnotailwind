"use client";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    form_token?: string | null;
  }
}

function MyWidget() {
  useEffect(() => {
    window.form_token = "GLFT-3SXG2ALHRO2TQDSI2XVG9SRZBHE";
    return () => {
      window.form_token = null;
    };
  }, []);

  return (
    <>
      <Script
        src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"
        strategy="afterInteractive"
      />

      <div id="leadforms-embd-form" />
    </>
  );
}

export default MyWidget;
