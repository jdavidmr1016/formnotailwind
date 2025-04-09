import Script from "next/script";

export default function Home() {
  return (
    <div>
      <main>
        <div id="leadforms-embd-form"></div>

        <Script
          async
          src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"
        ></Script>
        <Script id="form-token" strategy="afterInteractive">
          {`window.form_token = "GLFT-6M64JZ7D1I9KL10J4FPNFHEHB9Q";`}
        </Script>
      </main>
    </div>
  );
}
