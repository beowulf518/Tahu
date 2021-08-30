import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ItemDetail from '../components/ItemDetails/ItemDetails';
import LiveAuctions from '../components/Auctions/AuctionsThree';
import Footer from '../components/Footer/Footer';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ItemDetails extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <ItemDetail id={this.props.match.params.id}/>
                {/* <LiveAuctions /> */}
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ItemDetails;