import Image from 'next/image';
import servers from '@/data/servers.json';
import { MdLabel } from 'react-icons/md';

export default function Servers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <div className="max-w-4xl w-full items-start justify-start flex flex-col gap-5">
        <h1 className="text-white font-bold text-3xl">Servidores</h1>
        <div className="grid grid-cols-3 gap-x-2 gap-y-5 w-full grid-flow-dense">
          {servers.map(server => {
            return (
              <div
                className={
                  'bg-neutral-900 hover:bg-neutral-800 mr-3 pb-3 h-auto rounded-md' +
                  (server.isHighlight ? ' col-span-2' : '')
                }
                key={server.name}
              >
                <img
                  src={server.bannerURL}
                  className="w-full h-full object-cover max-h-36 rounded-t-md"
                />
                <img
                  src={server.avatarURL}
                  className="w-12 ml-3 -mt-8 rounded-xl"
                />
                <div className="w-full flex justify-between items-center px-3 mt-3">
                  <p className="text-white font-bold text-md gap-1.5 flex">
                    {server.partnered ? (
                      <Image
                        src={'/assets/partner.svg'}
                        width={16}
                        height={16}
                        alt="Partnered"
                      />
                    ) : (
                      ''
                    )}
                    {server.verified ? (
                      <Image
                        src={'/assets/verified.svg'}
                        width={16}
                        height={16}
                        alt="Verified"
                      />
                    ) : (
                      ''
                    )}
                    {server.name}
                  </p>
                  <div className="flex bg-neutral-700 text-principal rounded-md p-1 gap-1 items-center opacity-25 hover:opacity-80 text-xs">
                    <MdLabel /> {server.tags[0]}
                  </div>
                </div>
                <p className="text-principal text-md mt-2 gap-1.5 px-3 flex">
                  <Image
                    src={'/assets/members.svg'}
                    width={16}
                    height={16}
                    alt="Members"
                  />
                  {Math.ceil(server.members).toLocaleString('pt-BR')}{' '}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
