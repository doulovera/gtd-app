import Link from 'next/link';

const navItem = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'App',
    href: '/app',
  },
];

export default function Header () {
  return (
    <header className="h-14 w-full px-4 sm:px-8 bg-slate-300">
      <div className="flex flex-row items-center justify-between h-full max-w-5xl m-auto">
        <section className="font-extrabold text-3xl">GTD</section>
        <nav className="flex justify-between gap-3">
            {
              navItem.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className="py-1 px-3 hover:bg-slate-200 rounded-md"
                  >
                    {item.name}
                  </a>
                </Link>
              ))
            }
          </nav>
        <section className="">
          <Link href="/auth/signin">
            <a
              className="border-2 border-black rounded-md px-4 py-1"
            >
              Sign in
            </a>
          </Link>
        </section>
      </div>
    </header>
  );
};
