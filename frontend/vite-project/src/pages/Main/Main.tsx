import React from 'react';
import Sidebar from "../../components/MainPageComponents/Sidebar/Sidebar";
import ProductList from "../../components/MainPageComponents/ProductList/ProductList";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default Main;