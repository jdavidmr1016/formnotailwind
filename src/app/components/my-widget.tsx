"use client";

import { useLayoutEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    form_token?: string | null;
  }
}
export default function MyWidget() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.form_token = "GLFT-3SXG2ALHRO2TQDSI2XVG9SRZBHE";
      return () => {
        window.form_token = null;
      };
    }
  }, []);

  const type =
    process.env.NODE_ENV === "development" ? "module" : "text/javascript";
  const src =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/src/index.js"
      : "https://api.useleadbot.com/lead-bots/get-pixel-script.js";

  return (
    <>
      <Script type={type} src={src} strategy="afterInteractive" />
      <div id="leadforms-embd-form" />
    </>
  );
}
