'use client';

import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdEmail, MdHome, MdList } from 'react-icons/md';

export function Footer() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex flex-col items-center justify-center text-principal rounded-full border-1 border-neutral-500 hover:bg-neutral-700 transition-all duration-300 p-2 ${
      pathname === href ? 'bg-neutral-800' : 'bg-neutral-900'
    }`;

  return (
    <div className="bg-neutral-900 h-screen w-[4.5rem] fixed left-0 top-0 hidden lg:block">
      <div className="fixed left-3 top-1/3 h-1/5 lg:flex hidden flex-col items-center justify-between z-50 space-y-4">
        <Tooltip
          showArrow={true}
          content="Início"
          placement="right"
          className="bg-neutral-900 text-md"
        >
          <Link className={linkClass('/')} href="/">
            <MdHome className="h-7 w-7" />
          </Link>
        </Tooltip>
        <Tooltip
          showArrow={true}
          content="Servidores"
          placement="right"
          className="bg-neutral-900 text-md"
        >
          <Link className={linkClass('/servers')} href="/servers">
            <MdList className="h-7 w-7" />
          </Link>
        </Tooltip>
        <Tooltip
          showArrow={true}
          content="Contacto"
          placement="right"
          className="bg-neutral-900 text-md"
        >
          <Link className={linkClass('/contact')} href="/contact">
            <MdEmail className="h-7 w-7" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
