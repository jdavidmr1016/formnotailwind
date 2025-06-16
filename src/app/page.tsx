"use client";
import { useEffect, useState } from "react";
import "./page.module.css";
export const dynamic = "force-dynamic";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <>{domLoaded && <div id="leadforms-embd-form"></div>}</>;
}
