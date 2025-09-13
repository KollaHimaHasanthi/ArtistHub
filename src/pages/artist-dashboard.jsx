
import Sidebar from "@/components/artist-sidebar";

export const metadata = {
  title: "Dashboard App",
  description: "Next.js Dashboard with Sidebar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar Imported */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
