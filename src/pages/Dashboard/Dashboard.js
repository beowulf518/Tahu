import React, { Component } from 'react';

import img_display from "../../images/auction_1.jpg";
import Card_Hot from "../../components/Cards/Card_Hot"
import Card_Drop from "../../components/Cards/Card_Drop"
import img1 from "../../images/auction_1.jpg"
import img2 from "../../images/auction_1.jpg"
import img3 from "../../images/auction_1.jpg"
import img4 from "../../images/auction_1.jpg"
import img5 from "../../images/favicon.png"
import icon1 from "../../images/favicon.png"
import icon2 from "../../images/dog.png"

const Dashboard = () => {

    const cost = "123$";
    const title = "NFT Title";

    return (
        <div className="main bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center mt-5">
                        <div className="row">
                            <h1 className="text-dark">Collect</h1>
                        </div>
                        <div className="row"><h1 className="text-dark">digital Art</h1></div>
                        <div className="row"><h5 className="text-secondary">Buy and Sell NFTs on Binance Smart Chiain</h5></div>
                        <div className="row">
                            <button className="btn btn-success">Explore</button>
                            <button className="btn btn-bordered ml-3">Create</button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="row">
                            <h5 className="text-dark">Auction in progress</h5>
                        </div>
                        <div className="row mt-3">
                            <img src={img_display} width="400px" height="400px"></img>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3 text-dark">
                                <div className="row">Article</div>
                                <div className="row">Name Name</div>
                            </div>
                            <div className="col-md-3 text-dark">
                                <div className="row">Cost</div>
                                <div className="row">70$</div>
                            </div>
                            <div className="col-md-3 text-dark">
                                <div className="row">Auction Time</div>
                                <div className="row">2021-9-12</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className=" text-dark">Hot Collections</h4>
                    </div>
                    <div className="col-md-12 d-flex justify-content-around mb-4">
                        <Card_Hot image={img1}  cost={cost} title={title}></Card_Hot>
                        <Card_Hot image={img2} cost={cost} title={title}></Card_Hot>
                        <Card_Hot image={img3} cost={cost} title={title}></Card_Hot>
                        <Card_Hot image={img4} cost={cost} title={title}></Card_Hot>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className=" text-dark">Latest Drops</h4>
                    </div>
                    <div className="col-md-12 d-flex justify-content-around mb-4">
                        <Card_Drop image={img1} cost={cost} title={title} icon1={icon1} icon2={icon2}></Card_Drop>
                        <Card_Drop image={img2} cost={cost} title={title} icon1={icon1} icon2={icon2}></Card_Drop>
                        <Card_Drop image={img3} cost={cost} title={title} icon1={icon1} icon2={icon2}></Card_Drop>
                        <Card_Drop image={img4} cost={cost} title={title} icon1={icon1} icon2={icon2}></Card_Drop>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Dashboard;