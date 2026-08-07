import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-4 border-tufts-blue-bright sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo: Solid high-contrast text */}
        <Link
          href="/"
          className="font-black text-2xl tracking-tighter text-tufts-brown"
        >
          TUFTS <span className="text-tufts-blue">EMEN</span>
        </Link>

        {/* Links: Dark gray, hovering to the high-contrast blue */}
        <div className="flex gap-6 text-sm font-bold text-gray-700 uppercase tracking-wide">
          <Link
            href="/roster"
            className="hover:text-tufts-blue transition-colors"
          >
            Roster
          </Link>
          <Link
            href="/schedule"
            className="hover:text-tufts-blue transition-colors"
          >
            Schedule
          </Link>
        </div>
      </div>
    </nav>
  );
}
