import Index from "./Pages/Index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contacto from "./Pages/Contacto";
import Inscripcion from "./Pages/Inscripcion";
import Viajes from "./Pages/Viajes";
import Examenes from "./Pages/Examenes";
import Eventos from "./Pages/Eventos"
import Cursos from "./Pages/Cursos";
import Login from "./Session/Login";
import HeaderLog from "./Session/HeaderLog";
import FooterLog from "./Session/FooterLog";
import Register from "./Session/Register";
import Recover from "./Session/Recover";
import Inscriptos from "./AdminPages/Inscriptos";
import FooterUser from "./AdminPages/FooterUser";
import HeaderUser from "./AdminPages/HeaderUser";
import UserSideBar from "./AdminPages/UserSideBar";
import Usuarios from "./AdminPages/Usuarios";
import Configuracion from "./AdminPages/Configuracion";
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import SideBar from "./Header/SideBar";
import ContextProvider from './Context/Context';
import StudentProvider from "./Context/StudentContext";
import UserProvider from "./Context/UserContext";
import AdminProvider from "./Context/AdminContext";
import ConfigsProvider from "./Context/ConfigsContext";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/button.css";
import "./sass/header.css";
import "./sass/reset.css";
import "./sass/index.css";
import "./sass/footer.css";
import "./sass/inscripcion.css";
import "./sass/contacto.css";
import "./sass/examenes.css";
import "./sass/login.css";
import "./sass/inscriptos.css";
import "./sass/configs.css";
import "./sass/fotosGrid.css"
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
      <ContextProvider>
      <AdminProvider>
      <StudentProvider>
      <ConfigsProvider>
      <UserProvider>
          <Routes>
            <Route
              path="/ici/*"
              element={
                <>
                <SideBar/>
                <div className="content">
                  <Header />
                  <Outlet />
                  <Footer />
                </div>
                </>
              }
            >
              <Route index element={<Index />} />
              <Route exact path="inscripcion" element={<Inscripcion />} />
              <Route exact path="contacto" element={<Contacto />} />
              <Route exact path="viajes" element={<Viajes />} />
              <Route exact path="examenes" element={<Examenes />} />
              <Route exact path="cursos" element={<Cursos />} />
              <Route exact path="eventos" element={<Eventos />}/>
            </Route>
            <Route
              path="/inicio/*"
              element={
                <>
                  <div className="content">
                    <HeaderLog/>
                    <Outlet />
                    <FooterLog/>
                  </div>
                </>
              }
            >
              <Route index element={<Login />} />
              <Route exact path="registro/:registerToken" element={<Register/>}/>
              <Route exact path="recuperar/:recoverToken" element={<Recover/>} />
            </Route>
            <Route
              path="/usuario/*"
              element={
                <>
                  <UserSideBar/>
                  <div className="content">
                    <HeaderUser/>
                    <Outlet />
                    <FooterUser/>
                  </div>
                </>
              }
            >
              <Route index element={<Inscriptos />} />
              <Route exact path="inscriptos/:page?/:key?/:value?/:sortField?/:sortOrder?" element={<Inscriptos/>}/>
              <Route exact path="usuarios/:page?/:key?/:value?/:sortField?/:sortOrder?" element={<Usuarios/>}/>
              <Route exact path="configuracion" element={<Configuracion/>} />
            </Route>
          </Routes>
      </UserProvider>
      </ConfigsProvider>
      </StudentProvider>
      </AdminProvider>
      </ContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
