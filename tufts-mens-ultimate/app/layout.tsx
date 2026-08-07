import "./globals.css";
import Navbar from "@/components/Navbar"; // Adjust path if needed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
