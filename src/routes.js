import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from './modules/core/page/NotFoundPage404';
import HomePage from './modules/core/page/HomePage';
import ContactoPage from './modules/mi-pagina/page/ContactoPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route exact path="/contacto" element={<ContactoPage/>} />
    <Route exact path="*" element={<NotFoundPage404/>} />
  </Routes>
);

export default AppRoutes;