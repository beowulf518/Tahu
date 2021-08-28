
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoJS from '../VideoJS';
import { API } from 'aws-amplify';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/explore";

function ExploreTwo() {
    // state = {
    //     data: {},
    //     exploreData: []
    // }
    // componentDidMount(){
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 exploreData: res.data.exploreData
    //             })
    //             // console.log(this.state.data)
    //         })
    //     .catch(err => console.log(err))
    // }

    const [options, setOptions] = useState([]);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {

        const fetchItems = async () =>{
            const apiName = 'tahuapi';
            const path = '/items';
            const myInit = {
                headers: {},
            };

            const res = await API.get(apiName, path, myInit);      
            setApiData(res);
        }

        fetchItems();
    }, []);

    useEffect(() => {

        const getItemById = async (id) => {
            const apiName = 'tahuapi';
            const path = '/item/' + id;
            const myInit = {
                headers: {},
            };

            const res = await API.get(apiName, path, myInit);
            console.log("Get Item By Id: ", res);
        }

        const fetchOptions = () =>{
            console.log("apiData: ", apiData);

            const res = apiData.map(item => {
                const x = {
                    autoplay: true,
                    controls: true,
                    responsive: true,
                    fluid: false,
                    height: '150px',
                    sources: [{
                        src: item.previewUrl,
                        type: item.previewContentType
                    }],
                    isVideo: item.previewContentType.includes('video') ? true: false ,
                    url: item.previewUrl,
                    id: item.id,
                    title: item.title,
                    description: item.descripttion,

                }
                return x;
            })
            

            console.log("option list: ", res);
            setOptions(res);
        }

        fetchOptions();

        if(apiData.length > 0) {
            getItemById(apiData[0].id);
        }
        
    }, [apiData]);

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
                                        <a href={`/item-details/${item.id}`}>
                                            {item.isVideo && <VideoJS options={item} />}
                                            {!item.isVideo && <img className="card-img-top" src={item.url} alt="" /> }
                                        </a>
                                    </div>
                                    {/* Card Caption */}
                                    <div className="card-caption col-12 p-0">
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <a href="/item-details">
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
                </div>
            </div>
        </section>
    );
}

export default ExploreTwo;