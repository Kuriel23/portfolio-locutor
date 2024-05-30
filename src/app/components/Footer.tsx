'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdEmail, MdHome, MdList } from 'react-icons/md';

export function Footer() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex gap-1.5 items-center ${pathname === href ? "text-white" : "text-principal"}`;

  return (
    <div className='w-full flex justify-between my-5'>
        <Link className={linkClass('/')} href="/">
            <MdHome /> <p>Início</p>
          </Link>
        <Link className={linkClass('/portfolio')} href="/portfolio">
            <MdList /> <p>Servidores</p>
        </Link>
        <Link className={linkClass('/contact')} href="/contact">
            <MdEmail /> <p>Contato</p>
        </Link>
    </div>
  );
}
