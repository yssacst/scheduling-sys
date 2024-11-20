import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Caso você use o React Router

import logo from '../assets/images/logo/logo.png';

import '../assets/vendors/iconly/bold.css'
import '../assets/vendors/perfect-scrollbar/perfect-scrollbar.css'
import '../assets/vendors/bootstrap-icons/bootstrap-icons.css'

const Sidebar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <div id="sidebar" class="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="toggler">
              <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
            </div>
          </div>
        </div>
        
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-item">
              <Link to="/" className="sidebar-link">
                <i className="bi bi-grid-fill"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to="/agendamentos" className="sidebar-link">
                <i className="bi bi-calendar-date-fill"></i>
                <span>Agendamentos</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to="/servicos" className="sidebar-link">
                <i className="bi bi-clipboard-data"></i>
                <span>Serviços</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to="/perfil" className="sidebar-link">
                <i className="bi bi-person-circle"></i>
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
