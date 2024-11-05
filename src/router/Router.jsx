import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Brand from '../pages/Brand';
import Product from '../pages/Product';
import Question from '../pages/Question';
import Header from '../components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/product" element={<Product />} />
                <Route path="/inquiry" element={<Question />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;