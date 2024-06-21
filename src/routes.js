import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pagina/inicio";
import SobreMim from "./pagina/sobreMim";
import Menu from "./componente/menu";
import Rodape from "./componente/rodape";
import PaginaPadrao from "./componente/paginaPadrao";
import Post from "./pagina/post";
import NaoEncontrada from "./componente/naoEncontrada";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        <Route path="/post/:id" element={<Post />} />
        <Route path="/*" element={<NaoEncontrada/>} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
