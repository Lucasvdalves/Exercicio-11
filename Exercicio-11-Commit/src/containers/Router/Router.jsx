import React from 'react';
import { Route, Routes } from 'react-router';
import Form from '../containers/Form/Form'
import Home from '../containers/Home/Home'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    </div>
  );
}