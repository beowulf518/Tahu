import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../actions/product';

const initData = {
    menuName: "Search",
    menuIcon: "far fa-times-circle icon-close",
    heading: "What are you looking for????",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Search"
}

const ModalSearch = () => {

    const dispatch = useDispatch();
    const [ data, setData ] = useState(initData);
    const inputEl = useRef(null);

    const onSearch = () => {
        dispatch(getProducts(inputEl.current.value, ''));
        console.log(inputEl.current.value);
    }

 
    return (
        <div id="search" className="modal fade p-0">
            <div className="modal-dialog dialog-animated">
                <div className="modal-content h-100">
                    <div className="modal-header" data-dismiss="modal">
                        {data.menuName} <i className={data.menuIcon} />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 align-self-center">
                                <div className="row">
                                    <div className="col-12 pb-3">
                                        <h2 className="search-title mt-0 mb-3">{data.heading}</h2>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 input-group mt-4">
                                        <input type="text" placeholder="Enter your keywords" ref={inputEl}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 input-group align-self-center">
                                        <button className="btn btn-bordered-white mt-3" onClick={onSearch} >{data.btnText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalSearch;