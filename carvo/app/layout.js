import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Carvo — consultor de carros",
  description:
    "Catálogo, comparador e glossário simples pra escolher entre combustão, híbrido e elétrico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans min-h-screen pb-16 sm:pb-0">
        <Nav />
        <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">{children}</main>
      </body>
    </html>
  );
}
