import GlobalBackground from "@/app/components/design/Background";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
