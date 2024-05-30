'use client';
import servers from '@/data/servers.json';
import { MdArrowBackIosNew, MdLabel, MdLink } from 'react-icons/md';
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

type Server = {
  partnered?: boolean;
  verified?: boolean;
  name?: string;
  bannerURL?: string;
  inviteURL?: string;
  description?: string;
  tags?: string[];
};

export default function Servers() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 lg:px-32 lg:py-10">
      <div className="max-w-4xl w-full lg:items-start items-center justify-start flex flex-col">
        <h1 className="text-white flex gap-1 items-center font-bold text-3xl">
          <Link href={'/'} className='hover:text-principal'>
            <MdArrowBackIosNew />
          </Link>
          Portfólio
        </h1>
        <h2 className="text-principal text-xl my-3 text-center">
          Clique nos servidores agora para ver o que eu fiz!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-5 w-full grid-flow-dense">
          {servers.map(server => {
            return (
              <div
                className={
                  'bg-neutral-900 hover:bg-neutral-800 mr-3 pb-3 h-auto max-lg:w-full cursor-pointer rounded-md' +
                  (server.isHighlight ? ' lg:col-span-2' : '')
                }
                key={server.name}
                onClick={() => {
                  setSelectedServer(server);
                  onOpen();
                }}
              >
                <img
                  alt="server banner"
                  src={server.bannerURL}
                  className="w-full h-full object-cover max-h-36 rounded-t-md pointer-events-none"
                />
                <Image
                  alt="server logo"
                  isBlurred
                  src={server.avatarURL}
                  className="w-12 ml-3 -mt-8 rounded-xl pointer-events-none"
                />
                <div className="w-full flex justify-between items-center px-3 mt-3">
                  <p className="text-white font-bold text-md gap-1.5 flex items-center">
                    {server.partnered && (
                      <Image
                        src={'/assets/partner.svg'}
                        width={16}
                        height={16}
                        alt="Partnered"
                        className='pointer-events-none'
                      />
                    )}
                    {server.verified && (
                      <Image
                        src={'/assets/verified.svg'}
                        width={16}
                        height={16}
                        alt="Verified"
                        className='pointer-events-none'
                      />
                    )}
                    {server.name}
                  </p>
                  <div className="flex bg-neutral-700 text-principal rounded-md p-1 gap-1 items-center opacity-25 hover:opacity-80 text-xs">
                    <MdLabel /> {server.tags[0]}
                  </div>
                </div>
                <p className="text-principal text-md mt-2 gap-1.5 px-3 flex items-center">
                  <Image
                    src={'/assets/members.svg'}
                    width={16}
                    height={16}
                    className='pointer-events-none'
                    alt="Members"
                  />
                  {Math.ceil(server.members).toLocaleString('pt-BR')}{' '}
                </p>
              </div>
            );
          })}
        </div>
        <Modal
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          hideCloseButton
        >
          <ModalContent className="mx-3 lg:mx-0 lg:max-w-4xl">
            <ModalHeader className="py-1 px-5 items-center justify-center">
              <h2 className="text-white font-bold text-lg mt-0.5 gap-1.5 flex items-center">
                {selectedServer?.partnered && (
                  <Image
                    src={'/assets/partner.svg'}
                    className='pointer-events-none'
                    width={16}
                    height={16}
                    alt="Partnered"
                  />
                )}
                {selectedServer?.verified && (
                  <Image
                    src={'/assets/verified.svg'}
                    className='pointer-events-none'
                    width={16}
                    height={16}
                    alt="Verified"
                  />
                )}
                {selectedServer?.name}
              </h2>
            </ModalHeader>
            <ModalBody className="px-0 pt-0.5 pb-4">
              <img
                alt="server banner"
                src={selectedServer?.bannerURL}
                className="w-full h-full object-cover max-h-56 p-0 pointer-events-none"
              />
              <div className="px-2 lg:px-5 flex justify-between items-center mt-0.5">
                <h3 className="text-white font-bold text-lg">Sobre</h3>
                <div className="flex bg-neutral-700 text-principal rounded-md p-1 gap-1 items-center opacity-80 text-xs">
                  <MdLabel /> {selectedServer?.tags?.[0]}
                </div>
              </div>
              <Markdown
                className="px-2 lg:px-5 text-principal text-sm leading-6"
                components={{
                  h1(props) {
                    const { node, ...rest } = props;
                    return <h1 className="text-white text-lg mb-4" {...rest} />;
                  },
                  p(props) {
                    const { node, ...rest } = props;
                    return <p className="mb-5" {...rest} />;
                  },
                  ul(props) {
                    const { node, ...rest } = props;
                    return <ul className="list-disc ml-5" {...rest} />;
                  },
                }}
              >
                {selectedServer?.description}
              </Markdown>
              {selectedServer?.inviteURL !== '' && (
                <Link
                  className="text-principal text-md items-center justify-center gap-1 hover:text-gray-100 flex mx-5 bg-neutral-800 rounded-md p-2 font-bold"
                  href={selectedServer?.inviteURL as Url}
                >
                  <MdLink />
                  Link do Servidor
                </Link>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </main>
  );
}
