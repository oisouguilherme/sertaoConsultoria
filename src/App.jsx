import { Consultoria } from "./components/Cosultoria";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NossaHistoria } from "./components/NossaHistoria";
import { NossoValor } from "./components/NossoValor";
import { Parceiros } from "./components/Parceiros";
import { Servicos } from "./components/Servicos";

function App() {
  return (
    <div>
      <Header/>
      <Main />
      <Consultoria />
      <Servicos />
      <NossaHistoria/>
      <NossoValor />
      <Parceiros/>
    </div>
  );
}

export default App
