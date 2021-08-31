
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import VideoJS from '../VideoJS';
import getProducts from '../../actions/product';

const ExploreTwo = () => {
    const dispatch = useDispatch();
    const { nfts: options } = useSelector(state => state.product);
    const { pages } = useSelector(state => state.product)

    const handlePageClick = (data) => {
        dispatch(getProducts('', data.selected));
        console.log(data.selected);
    }
    
    return (
        <section className="explore-area">
            <div className="container">
                {/* <div className="row">
                    <div className="col-12">
                       
                        <div className="intro d-flex justify-content-between align-items-end m-0">
                            <div className="intro-content">
                                <span>{this.state.data.preHeading}</span>
                                <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                            </div>
                            <div className="intro-btn">
                                <a className="btn content-btn" href="/explore-1">{this.state.data.btnText}</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row items">
                    {options.length>0 && options.map((item, idx) => {
                        return (
                            <div key={`edt_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                <div className="card">
                                    <div className="image-over">
                                        <a>
                                            {item.isVideo && <VideoJS options={item} />}
                                            {!item.isVideo && <img className="card-img-top" src={item.url} alt="" /> }
                                        </a>
                                    </div>
                                    {/* Card Caption */}
                                    <div className="card-caption col-12 p-0">
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <a href={`/item-details/${item.id}`}>
                                                <h5 className="mb-0">{item.title}</h5>
                                            </a>
                                            <div className="seller d-flex align-items-center my-3">
                                                <span>Owned By</span>
                                                <a href="/author">
                                                    <h6 className="ml-2 mb-0">{item.owner?item.owner:`Richard`}</h6>
                                                </a>
                                            </div>
                                            <div className="card-bottom d-flex justify-content-between">
                                                <span>{item.price?item.price: `0.15Eth`}</span>
                                                <span>{item.count?item.count: `1 of 1`}</span>
                                            </div>
                                            <a className="btn btn-bordered-white btn-smaller mt-3" href="/wallet-connect"><i className="icon-handbag mr-2" />{item.btnText?item.btnText:'Buy'}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {
                        options.length==0 && <div style={{textAlign: 'center', width: '100%'}}>There is no data.</div>
                    }
                </div>
                
                <div class="paginate-container">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageClassName='pageItem'
                        pageCount={pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
                    
            </div>
        </section>
    );
}

export default ExploreTwo;