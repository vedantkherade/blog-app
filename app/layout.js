import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}