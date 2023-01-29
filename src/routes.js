import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from './modules/core/page/NotFoundPage404';
import HomePage from './modules/core/page/HomePage';
import ContactoPage from './modules/mi-pagina/page/ContactoPage';
import ProjectsPage from './modules/mi-pagina/page/ProjectsPage';
import InfoPage from './modules/mi-pagina/page/InfoPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route exact path="/contacto" element={<ContactoPage/>} />
    <Route exact path="/Projects" element={<ProjectsPage/>} />
    <Route exact path="/info" element={<InfoPage/>} />
    <Route exact path="*" element={<NotFoundPage404/>} />
  </Routes>
);

export default AppRoutes;