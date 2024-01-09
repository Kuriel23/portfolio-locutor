'use client';
import { Input, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { useMemo, useState } from 'react';
import { MdSend } from 'react-icons/md';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  const validateEmail = (value: string) =>
    value.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    );

  const isInvalid = useMemo(() => {
    if (email === '') return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await axios
      .post('https://backoffice.animesgg.com/api/form/locutor', {
        subject,
        content,
        name,
        email,
      })
      .then(() => {
        return setSending(true);
      })
      .catch(() => {
        console.log('Erro');
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 lg:px-32 lg:py-10">
      <div className="max-w-4xl w-full lg:items-start items-center justify-start flex flex-col">
        <h1 className="text-white font-bold text-3xl">Contato</h1>
        <h2 className="text-principal text-xl my-3 text-center">
          Contate-me para poder-lhe oferecer os meus serviços.
        </h2>
        {sending ? (
          <div className="w-full bg-green-800 p-3 rounded-md my-3">
            <p className="text-principal">Enviado com sucesso!</p>
          </div>
        ) : (
          <></>
        )}
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            type="text"
            label="Nome"
            variant="underlined"
            placeholder="Insira seu primeiro e último nome"
            className="mb-3 hover:border-neutral-800 border-neutral-900"
            isRequired
            onValueChange={setName}
            maxLength={100}
            max={100}
          />
          <Input
            type="email"
            label="Email"
            variant="underlined"
            placeholder="Insira seu email"
            className="mb-3 hover:border-neutral-800 border-neutral-900"
            isRequired
            isInvalid={isInvalid}
            color={isInvalid ? 'danger' : 'success'}
            errorMessage={isInvalid && 'Por favor, insira um email válido.'}
            onValueChange={setEmail}
            maxLength={100}
            max={100}
          />
          <Input
            type="text"
            label="Assunto"
            variant="underlined"
            placeholder="Seu Assunto"
            className="mb-3 hover:border-neutral-800 border-neutral-900"
            isRequired
            onValueChange={setSubject}
            maxLength={100}
            max={100}
          />
          <Textarea
            label="Mensagem"
            placeholder="Coloque sua mensagem"
            variant="underlined"
            className="mb-3 hover:border-neutral-800 border-neutral-900"
            isRequired
            height={1200}
            minRows={20}
            onValueChange={setContent}
            maxLength={1200}
          />
          <button
            type="submit"
            className="w-full text-principal text-md items-center justify-center gap-1 hover:text-gray-100 flex bg-neutral-900 p-2 rounded-md font-bold transition-all duration-200"
          >
            <MdSend />
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
