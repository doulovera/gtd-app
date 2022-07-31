import Link from 'next/link';
import { Bell, List, Notebook, Plus, User } from 'phosphor-react';

type Props = {
  isLogged: boolean;
}

const navItem = [
  {
    icon: <Notebook size={20} weight="fill" />,
    name: 'Notes',
    href: '/',
  },
];

export default function Header ({ isLogged }: Props) {
  return (
    <header className="fixed top-0 h-14 w-full px-4 sm:px-8 bg-primary-dark">
      <div className="flex justify-between items-center h-full mx-auto text-gray-300">
        <div className="flex justify-start items-center md:w-1/4 gap-3 md:gap-6">
          <List size={20} />
          <div className="flex justify-start items-center gap-0 md:gap-4">
            {
              navItem.map(({ name, icon, href }) => (
                <Link href={href} key={name}>
                  <a className="flex justify-start items-center gap-1 py-1 px-2 rounded-md hover:opacity-90 hover:bg-primary-light">
                    {icon}
                    <span className="hidden md:inline">{name}</span>
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="flex justify-end items-center md:w-1/4 gap-4 md:gap-6">
          {
            isLogged
              ? (
                <>
                  <button className="hidden md:inline p-1 text-white rounded-lg bg-gradient-to-r from-pink-400 to-pink-600">
                    <Plus size={20} />
                  </button>
                  <button><Bell size={20} /></button>
                  <button className="p-2 bg-primary-darker rounded-full">
                    <User size={20} />
                  </button>
                </>
                )
              : (
                <Link href="/">
                  <a className="border border-gray-300 py-1 px-3 rounded-md">
                    Sign in
                  </a>
                </Link>
                )
          }
        </div>
      </div>
    </header>
  );
};
