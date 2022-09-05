import PropTypes from "prop-types";
import React from "react";
import style from "./hotel.module.css";
import hotelImg from "../../../assets/images/hotel.jpg";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

const defaultProps = {
    description: "Not specified...",
};

function Hotel(props) {
    return (
        <div className={`${style.hotelContainer} row`}>
            <div className="col-4 mt-2">
                <img src={hotelImg} alt="Hotel" className="img-fluid" />
            </div>
            <div className="col-8 mt-2">
                <div className="row">
                    <div className="col-7">
                        <p>{props.name}</p>
                        <p>{props.city}</p>
                    </div>
                    <div className="col-5">
                        <p>{`Reviews: ${props.reviews}`}</p>
                        <p>{`Rating: ${props.rating}`}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2">
                <p>{props.description}</p>
                <button
                    className={`btn btn-${props.theme}`}
                    style={{ width: "100%", marginBottom: "10px" }}
                >
                    Show
                </button>
            </div>
        </div>
    );
}

Hotel.propTypes = propTypes;
Hotel.defaultProps = defaultProps;

export default Hotel;
