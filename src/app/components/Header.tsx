"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdEmail, MdHome, MdList } from "react-icons/md";

export function Header() {
	const pathname = usePathname();

	const linkClass = (href: string) =>
		`flex gap-1.5 font-bold items-center ${pathname === href ? "text-white" : "text-principal"} hover:text-white bg-neutral-800 px-3 my-2 rounded-xl`;

	return (
		<div className="w-full flex justify-between max-lg:px-2 max-w-4xl mx-auto h-10 bg-transparent">
			<Link className={linkClass("/")} href="/">
				<MdHome /> <p>Início</p>
			</Link>
			<Link className={linkClass("/portfolio")} href="/portfolio">
				<MdList /> <p>Portfólio</p>
			</Link>
			<Link className={linkClass("/contact")} href="/contact">
				<MdEmail /> <p>Contato</p>
			</Link>
		</div>
	);
}
