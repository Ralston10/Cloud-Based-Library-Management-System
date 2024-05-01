import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateBooks from './pages/CreateBooks.jsx'; // Corrected typo
import EditBook from './pages/EditBook.jsx';
import DeleteBooks from './pages/DeleteBook.jsx';
import ShowBook from './pages/ShowBook.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} /> {/* Corrected typo */}
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;