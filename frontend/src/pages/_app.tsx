import "@/styles/globals.css";
import type { AppProps } from "next/app";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <h1>DevTalk</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "1rem", background: "#eee", color: "#333" }}>
      <p>© 2025 My App Footer</p>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>  
  );
}
