import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Product from '../pages/Product';
import Question from '../pages/Question';
import Header from '../components/Header';
import ProductDetail from '../pages/ProductDetail';
import InqueryList from '../pages/InqueryList';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/inquiry" element={<Question />} />
                <Route path="/inquirylist" element={<InqueryList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;