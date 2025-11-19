import './globals.css';
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import type { Metadata } from "next";
import { Sora } from "next/font/google";


const font = Sora({
  weight: ["100","200","300","400","500","600","700","800"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Web Developer Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        <ResponsiveNavbar></ResponsiveNavbar>
        {children}
      </body>
    </html>
  );
}
