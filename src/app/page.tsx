"use client";
import { useEffect, useState } from "react";
//import "./page.module.css";
export const dynamic = "force-dynamic";

export default function Home() {
  const [viewLoaded, setViewLoaded] = useState(false);

  useEffect(() => {
    setViewLoaded(true);
    return () => {
      setViewLoaded(false);
    };
  }, []);

  return <div>{viewLoaded && <div id="leadforms-embd-form" />}</div>;
}
