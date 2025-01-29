"use client";

import { Image } from "@nextui-org/react";
import { MdArrowBack } from "react-icons/md";
import servers from "@/data/servers.json";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
	const birthDate = new Date("2001-01-26");
	const workDate = new Date("2016-01-26");
	const today = new Date();
	const age = today.getFullYear() - birthDate.getFullYear();
	const isBirthdayPassed =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() &&
			today.getDate() >= birthDate.getDate());

	const finalAge = isBirthdayPassed ? age : age - 1;
	const workYears = today.getFullYear() - workDate.getFullYear();
	const isWorkPassed =
		today.getMonth() > workDate.getMonth() ||
		(today.getMonth() === workDate.getMonth() &&
			today.getDate() >= workDate.getDate());

	const finalWork = isWorkPassed ? workYears : workYears - 1;
	return (
		<>
			<div
				style={{ backgroundImage: "url(/banner.png)" }}
				className="w-full object-cover bg-center h-64"
			/>
			<main className="flex flex-col items-center justify-center p-3 lg:px-32 -my-24">
				<div className="max-w-4xl w-full items-center lg:items-start justify-center flex flex-col max-xl:my-2 gap-1 -mt-2">
					<Image
						isBlurred
						src={"/favicon.gif"}
						alt="Logo"
						width={140}
						height={140}
						className="mt-4"
					/>
					<h1 className="text-white font-bold text-3xl mb-8">Locutor</h1>
					<p className="text-principal text-md text-left mb-1">
						Olá! Me chamo <strong>Leandro</strong> e tenho {finalAge} anos. Sou um
						entusiasta apaixonado em construir, crescer e gerenciar grandes
						comunidades para jogos, organizações e marcas. Estou há {finalWork} anos
						desenvolvendo, gerenciando e criando soluções para comunidades no
						Discord e atualmente trabalho como <strong>Administrador</strong>,{" "}
						<strong>Líder de equipe</strong> e <strong>Moderador</strong>.
					</p>
					<p className="text-principal text-md text-left my-2">
						Hoje em dia eu tenho a honra de <strong>liderar</strong> a{" "}
						<strong>maior comunidade</strong> da América do Sul no Discord, que
						já somam mais de 700.000 membros. Além de todas essas atividades de
						gerenciamento e moderação, também adoro oferecer outros serviços
						personalizados para o Discord. Se você precisar de um servidor
						conforme suas necessidades, estou aqui para ajudar!
					</p>
					<p className="text-principal text-md text-left">
						Também forneço minha experiência para colaborar voluntariamente com
						projetos que acredito valer a pena.
					</p>
					<div className="flex justify-between items-center w-full mt-10">
						<h2 className="text-white font-bold text-xl">
							Você pode me encontrar por aqui...
						</h2>
						<Link
							className="text-principal text-md items-center gap-1 hover:text-gray-100 hidden lg:flex bg-neutral-900 p-2 rounded-md font-bold transition-all duration-200"
							href="/portfolio"
						>
							<MdArrowBack />
							Mais servidores
						</Link>
					</div>
					<Marquee
						autoFill
						className="flex flex-row"
						gradient
						gradientColor="#101010"
					>
						{servers
							.filter((server) => server.isHome)
							.slice(0, 4)
							.map((server) => {
								return (
									<a
										href={server.inviteURL}
										className="bg-neutral-900 mx-3 max-w-72 w-72 p-3 flex items-center justify-start rounded-md hover:bg-neutral-800 transition-all duration-200 my-3"
										key={server.name}
										target="_blank"
										rel="noreferrer"
									>
										<Image
											alt="server logo"
											isBlurred
											src={server.avatarURL}
											className="w-12 bg-cover rounded-md"
										/>
										<div className="flex flex-col">
											<p className="text-white font-bold text-md ml-3 gap-1.5 flex items-center">
												{server.partnered && (
													<Image
														src={"/assets/partner.svg"}
														width={16}
														height={16}
														alt="Partnered"
													/>
												)}
												{server.verified && (
													<Image
														src={"/assets/verified.svg"}
														width={16}
														height={16}
														alt="Verified"
													/>
												)}
												{server.name}
											</p>
											<p className="text-principal text-md ml-3 gap-1.5 flex items-center">
												<Image
													src={"/assets/members.svg"}
													width={16}
													height={16}
													alt="Members"
												/>
												{Math.ceil(server.members).toLocaleString("pt-BR")}{" "}
											</p>
										</div>
									</a>
								);
							})}
					</Marquee>
					<Marquee
						autoFill
						className="flex flex-row"
						gradient
						gradientColor="#101010"
						direction="right"
					>
						{servers
							.filter((server) => server.isHome)
							.slice(4, 8)
							.map((server) => {
								return (
									<a
										href={server.inviteURL}
										className="bg-neutral-900 mx-3 max-w-72 w-72 p-3 flex items-center justify-start rounded-md hover:bg-neutral-800 transition-all duration-200"
										key={server.name}
										target="_blank"
										rel="noreferrer"
									>
										<Image
											alt="server logo"
											isBlurred
											src={server.avatarURL}
											className="w-12 bg-cover rounded-md"
										/>
										<div className="flex flex-col">
											<p className="text-white font-bold text-md ml-3 gap-1.5 flex items-center">
												{server.partnered && (
													<Image
														src={"/assets/partner.svg"}
														width={16}
														height={16}
														alt="Partnered"
													/>
												)}
												{server.verified && (
													<Image
														src={"/assets/verified.svg"}
														width={16}
														height={16}
														alt="Verified"
													/>
												)}
												{server.name}
											</p>
											<p className="text-principal text-md ml-3 gap-1.5 flex items-center">
												<Image
													src={"/assets/members.svg"}
													width={16}
													height={16}
													alt="Members"
												/>
												{Math.ceil(server.members).toLocaleString("pt-BR")}{" "}
											</p>
										</div>
									</a>
								);
							})}
					</Marquee>
					<Link
						className="text-principal text-md items-center justify-center gap-1 hover:text-gray-100 lg:hidden flex w-full bg-neutral-900 rounded-md p-2 font-bold"
						href="/portfolio"
					>
						<MdArrowBack />
						Mais servidores
					</Link>
				</div>
			</main>
		</>
	);
}
