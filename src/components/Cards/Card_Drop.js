import React from 'react';

const Card_Drop = ({ image, cost, title, icon1, icon2 }) => {
    return (
        <div className="col-md-3 mt-3 ml-3 mr-3 border">
            <img src={image} width="300px" className="mt-1" height="300px" alt="123" />
            <div className=" border">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                        <img src={icon1} width="30px" height="30px" alt="pic"/>
                    </div>
                    <div className="col-md-9 mb-3">
                        <h5 className="text-dark">{title}</h5>
                        <p className="text-secondary">{cost}</p>
                    </div>
                </div>

            </div>
            <div className=" border">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                        <img src={icon2} width="30px" height="30px" alt="pic"/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="card-title text-dark">{title}</h5>
                    </div>
                </div>


            </div>



        </div>
    );
}

export default Card_Drop;