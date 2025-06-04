import Link from "next/link";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed w-full p-4 shadow-md bg-white flex flex-row justify-start items-center border-b border-gray-200 gap-5">
      {children}
      <nav className="">
        <ul className="list-none flex flex-row gap-4 ">
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

      <div className="flex flex-row items-center justify-end gap-4 max-w-sm w-full"> 
        <Link href="/app/login" className="text-black">Login</Link>
        <Link href="/app/signup" className="text-black">SignUp</Link>
      </div>

    </header>
  );
}

