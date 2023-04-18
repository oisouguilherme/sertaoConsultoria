import { Consultoria } from "./components/Cosultoria";
import { Main } from "./components/Main";
import { NossaHistoria } from "./components/NossaHistoria";
import { NossoValor } from "./components/NossoValor";
import { Parceiros } from "./components/Parceiros";
import { Servicos } from "./components/Servicos";
import { Projetos } from "./components/Projetos";
import { NossoTime } from "./components/NossoTime";
import { Orcamento } from "./components/Orcamento";
import { Footer } from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-gray-100">
      <Nav/>
      <div className="mt-20 md:mt-28">
        <Main />
        <Consultoria />
        <Servicos />
        <NossaHistoria/>
        <NossoValor />
        <Parceiros/>
        <Projetos/>
        <NossoTime/>
        <Orcamento/>
        <Footer/>
      </div>
    </div>
  );
}

export default App
