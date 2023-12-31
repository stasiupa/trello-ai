import Modal from "@/components/Modal";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello AI Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Trello AI Clone</title>
      </head>
      <body className="bg-[#F5F6FB">
        {children}

        <Modal />
      </body>
    </html>
  );
}
