import React from 'react';

const Card_Hot = ({ image, image1, cost, title }) => {
    return (
        <>
        <div className="col-md-3 mt-3 ml-3 mr-3 border position-relative d-flex flex-column">
            <img src={image} width="300px" className="mt-1" height="150px" alt="123" />

            {/* <img src={image1}  className="position-absolute" width="30px" height="30px" left="50%" alt="pic"/> */}
            <div className="text-center">
                <h5 className="text-dark">{title}</h5>
                <p className="text-dark mb-3">{cost}</p>
            </div>


        </div>
        </>
    );
}

export default Card_Hot;