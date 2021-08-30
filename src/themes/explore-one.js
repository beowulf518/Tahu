import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreTwo';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import getProducts from '../actions/product';

const ExploreOne = () => {
    const dispatch = useDispatch();
    const { results: products } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div className="main">
            <Header />
            <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 1" />
            <Explore />
            <Footer />
            <ModalSearch />
            <ModalMenu />
            <Scrollup />
        </div>
    );
}

export default ExploreOne;