import { CardService } from "./CardService";

export function Servicos(){
  return(
    <div className="px-24 py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-verde">Principais serviços</h2>
      <div className="flex gap-4">
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </div>
  )
}