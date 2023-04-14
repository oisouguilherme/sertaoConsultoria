export function Orcamento(){
  return (
    <div className="px-24 py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-verde">Faça o seu orçamento</h2>
      <form
        action="mailto:gh.dourado77@gmail.com"
        method="POST"
        encType="text/plain"
        className="flex flex-col border-4 border-verde shadow-lg shadow-black rounded-lg p-12 w-1/2"
      >
        <label 
        className="text-xl font-medium"
        id="name">Seu nome:</label>
        <input 
        className="bg-gray-300 border-2 rounded px-3 py-2"
        type="text" 
        name="name"
        placeholder="Digite seu nome completo"
        id="name" />

        <label className="text-xl font-medium" id="email">E-mail:</label>
        <input 
        className="bg-gray-300 border-2 rounded px-3 py-2" type="email" 
        placeholder="Digite seu melhor e-mail"
        name="email" 
        id="email" />

        <label className="text-xl font-medium" id="text">Sua mensagem:</label>
        <textarea 
        className="bg-gray-300 border-2 rounded px-3 py-2" 
        type="text" 
        placeholder="Deixe aqui sua mensagem"
        name="text" id="text" />
        <div className="flex justify-center gap-8 mt-12">
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