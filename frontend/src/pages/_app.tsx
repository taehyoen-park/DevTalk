import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed w-full p-4 shadow-md bg-white flex flex-row justify-between items-center border-b border-gray-200">
      <nav className="ml-10">
        <ul className="list-none flex gap-4 ">
          <li><Link href="/" className="text-black">DevTalk</Link></li>
          <li><Link href="/about" className="text-black">About</Link></li>
          <li><Link href="/contact" className="text-black">Contact</Link></li>
        </ul>
      </nav>
      <form action="/search" method="get" className="inline-block flex-1 max-w-3xl w-full">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="border border-gray-300 rounded p-2 text-black w-full"
        />
      </form>
      <div className="flex items-center justify-end gap-4">
        <Link href="/app/login" className="text-black">Login</Link>
        <Link href="/app/signup" className="text-black">Sign Up</Link>
      </div>
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
