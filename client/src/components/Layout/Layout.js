import React from 'react';
import { Outlet } from 'react-router-dom';  // O Outlet renderiza os componentes filhos das rotas
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import '../../assets/css/app.css'; // Importando o arquivo CSS
import '../../assets/css/bootstrap.css'; // Importando o arquivo CSS

const Layout = () => {
  return (
    <div id="app">
      <Sidebar />
      <main id="main">
        <Outlet />  {/* Este será o conteúdo dinâmico renderizado conforme as rotas */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
