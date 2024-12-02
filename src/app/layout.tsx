import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from 'next/font/google'
import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";
import PaddingContainer from "@/components/common/paddingContainer";


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700','800','900'],
  variable: '--font-figtree',
});


export const metadata: Metadata = {
  title: "NDI",
  description: "Empower your learning journey wit the National Defense Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <PaddingContainer className="p-6">
        <NavBar/>
        </PaddingContainer>
        {children}
    
        <Footer/>
      </body>
    </html>
  );
}
