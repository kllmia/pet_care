import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡尾巴寵物美容 | Bubble Tail Pet Spa",
  description:
    "竹東溫柔寵物美容空間，提供犬貓洗澡、修剪造型、皮毛護理與預約制一對一服務。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
