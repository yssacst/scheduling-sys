// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Agendamento = lazy(() => import('./pages/Agendamento'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Servico = lazy(() => import('./pages/Servico'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>  {/* Exibe enquanto os componentes estão sendo carregados */}
        <Routes>
          {/* Definindo Layout como contêiner para todas as rotas */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/agendamentos" element={<Agendamento />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/servicos" element={<Servico />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
