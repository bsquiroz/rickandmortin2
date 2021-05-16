import React from "react";

const ResidentInfo = ({ infoResident }) => {
    const { name, image, status, origin, episode } = infoResident;
    return (
        <div className="resident-info">
            <h4>{name}</h4>
            <div className="image-resident">
                <img src={image} alt={name} />
            </div>
            {status === "Alive" && (
                <p>
                    {" "}
                    <span className="alive"></span> {status}
                </p>
            )}
            {status === "Dead" && (
                <p>
                    {" "}
                    <span className="dead"></span> {status}
                </p>
            )}
            {status === "unknown" && (
                <p>
                    {" "}
                    <span className="unknown"></span> {status}
                </p>
            )}

            <p>{origin.name}</p>
            <p>{episode.length}</p>
        </div>
    );
};

export default ResidentInfo;
