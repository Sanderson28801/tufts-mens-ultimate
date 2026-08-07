import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-tufts-brown text-white min-h-[70vh] flex items-center overflow-hidden">
      {/* 1. Background Image using Next.js Image component */}
      <Image
        src="/emen-hero.webp" // Put your image in the /public folder
        alt="Tufts Emen Ultimate frisbee player laying out for a catch"
        fill // Makes the image fill the container
        priority // Loads the image immediately
        className="object-cover z-0" // Standard CSS object-fit behavior
      />

      {/* 2. Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* 3. High-Contrast Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-24 flex flex-col items-start">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-none">
          Tufts Men's <br />
          <span className="text-tufts-blue-bright">Ultimate</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mb-10 leading-relaxed">
          The Emen. Competing at the highest levels of the USA Ultimate college
          division.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Primary Action: Recruiting */}
          <Link
            href="/join"
            className="bg-tufts-blue-bright hover:bg-tufts-blue text-white font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg shadow-md"
          >
            Prospective Players
          </Link>

          {/* Secondary Action: Alumni / Fans */}
          <Link
            href="/support"
            className="bg-transparent border-2 border-white/50 hover:border-white/100 hover:text-white text-gray-100 font-bold py-4 px-8 rounded-lg transition-colors text-center text-lg"
          >
            Support the Team
          </Link>
        </div>
      </div>
    </div>
  );
}
