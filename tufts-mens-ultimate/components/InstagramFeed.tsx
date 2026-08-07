"use client"; // This tells Next.js to render this in the browser

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement("script");
    script.type = "module";

    // 2. Paste the exact logic from Fouita into the script
    script.innerHTML = `import App from "https://cdn.fouita.com/public/instagram-feed.js?11";
    // new App({target: document.getElementById("ft-insta-app"),
    // props:{"settings":{"layout":"carousel","source":"insta","selected":"uname","header":true,"autoplay":true,"zigzag":false,
    // "cols":2,"cardHeight":300,"gap":0,"direction":"down","height":700,"bgColor":"","txtColor":""}}});`;

    // 3. Append it to the page
    document.body.appendChild(script);

    // 4. Clean up if the user leaves the page
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // The empty array ensures this only runs once

  return (
    <div className="w-full w-max-4xl mx-auto overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
      {/* The exact target ID the script is looking for */}
      <div id="ft-insta-app" className="w-full min-h-[400px]"></div>

      {/* Required Fouita Branding */}
      <div
        id="ft-insta-brd"
        className="p-4 text-xs text-gray-400 flex justify-center gap-2 bg-gray-50 border-t border-gray-100"
      >
        <a
          href="https://fouita.com/website-widgets/instagram-feed"
          target="_blank"
          rel="noreferrer"
          className="hover:text-tufts-blue transition-colors"
        >
          Embed Instagram Feed
        </a>
        <span>with Fouita</span>
      </div>
    </div>
  );
}
