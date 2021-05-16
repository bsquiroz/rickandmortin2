import React from "react";

const LocationInfo = ({ universe }) => {
    const { dimension, id, name, type, residents } = universe;
    return (
        <div className="location-info">
            <div>
                <p>
                    <strong>Name: </strong>
                    {name} <strong>#</strong>
                    {id}
                </p>
                <p>
                    <strong>Dimension: </strong> {dimension}
                </p>
                <p>
                    {" "}
                    <strong>Type: </strong>
                    {type}
                </p>
                <p>
                    <small>Number of residents: {residents.length}</small>
                </p>
            </div>
        </div>
    );
};

export default LocationInfo;
