
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export function Orcamento(){
  const form = useRef();
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_yuslwrr', form.current, '1C7EIEGUT8qUPdwPb')
      .then((result) => {
          alert('Mensagem enviada com sucesso');
      }, (error) => {
          alert(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="md:px-24 px-4 w-full py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl text-center font-bold text-verde">Faça o seu orçamento</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col border-4 border-verde shadow-lg shadow-black rounded-lg p-4 md:p-12 md:w-1/2 w-full"
      >
        <label 
        className="text-xl font-medium"
        id="name">Seu nome:</label>
        <input 
        className="bg-gray-300 border-2 rounded px-3 py-2"
        type="text" 
        required
        name="name"
        placeholder="Digite seu nome completo"
        id="name" />

        <label className="text-xl font-medium" id="email">E-mail:</label>
        <input 
        className="bg-gray-300 border-2 rounded px-3 py-2" type="email" 
        placeholder="Digite seu melhor e-mail"
        name="email"
        required
        id="email" />

        <label className="text-xl font-medium" id="text">Sua mensagem:</label>
        <textarea 
        className="bg-gray-300 border-2 rounded px-3 py-2" 
        type="text" 
        required
        placeholder="Deixe aqui sua mensagem"
        name="message" id="text" />
        <div className="flex justify-center gap-2 md:gap-8 mt-4 md:mt-12">
          <input 
          className="bg-verdeclaro hover:scale-110 duration-300 px-8 py-3 font-bold text-xl rounded-lg cursor-pointer shadow-md shadow-black"
          type="submit" 
          value="Enviar" />
          <input 
          className="bg-verdeclaro hover:scale-110 duration-300 px-8 py-3 font-bold text-xl rounded-lg cursor-pointer shadow-md shadow-black"
          type="reset" 
          value="Limpar" />
        </div>
      </form>
    </div>
  );
}