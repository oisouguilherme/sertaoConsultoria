import { CardService } from "./CardService";

export function Servicos(){
  return(
    <div className="lg:px-48 px-8 py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-verde">Principais serviços</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        <CardService text={"Outorga de uso da água"}/>
        <CardService text={"Licenciamentos ambientais"}/>
        <CardService text={"CAR, EIA/RIMA"}/>
        <CardService text={"Inventário da fauna"}/>
        <CardService text={"Gestão de obra"}/>
        <CardService text={"Monitoramento de fauna e flora"}/>
        <CardService text={"Intervenção ambiental"}/>
        <CardService text={"Laudo de valiação rural"}/>
        <CardService text={"Georreferenciamento de imóveis"}/>
        <CardService text={"Topografia"}/>
      </div>
      
    </div>
  )
}