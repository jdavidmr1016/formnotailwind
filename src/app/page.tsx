"use client";
import { useEffect, useState } from "react";
import "./page.module.css";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <div>{domLoaded && <div id="leadforms-embd-form"></div>}</div>;
}
