import React from "react";

const Card = (props) => {
    return (
        <div>
            <div className="card shadow-sm align-items-center bg-dark text-white border-light-subtle" style={{height: '200px'}}>
                <div className="card-body d-flex flex-column h-100 d-flex justify-content-center align-items-center">
                    <h5 className="card-title fs-1">{props.numinfo}</h5>
                </div>
            </div>
        </div>
    )
};

export default Card;
