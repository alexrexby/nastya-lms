import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomBar } from "@/components/layout/BottomBar";

export const metadata: Metadata = {
  title: "Химия с Настей Повышевой — Понять и сдать! (ЕГЭ и ОГЭ)",
  description:
    "Авторская онлайн-платформа репетитора по химии: статьи, формулы, интерактивный тренажёр тестов и закрытые группы с видеоуроками.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
