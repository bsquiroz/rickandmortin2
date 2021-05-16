import React, { useState } from "react";
import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";

const LocationContainer = ({ universe }) => {
    const { residents } = universe;
    const [next, setNext] = useState(0);
    const [previous, setPrevious] = useState(4);
    const pagResidents = residents.slice(next, previous);

    const handleNext = () => {
        setNext(next + 4);
        setPrevious(previous + 4);
    };

    const handlePrevious = () => {
        setNext(next - 4);
        setPrevious(previous - 4);
    };

    return (
        <div className="location-container">
            <LocationInfo universe={universe} />
            <div className="container-buttons">
                {next !== 0 && (
                    <button
                        onClick={handlePrevious}
                        className="button previuos"
                    >
                        ⏮️
                    </button>
                )}
                {previous < residents.length && (
                    <button onClick={handleNext} className="button next">
                        ⏭️
                    </button>
                )}
            </div>

            <div className="resident-container">
                {residents.length === 0 ? (
                    <h2>No hay residentes en esta localidad</h2>
                ) : (
                    pagResidents.map((resident) => (
                        <ResidentContainer resident={resident} key={resident} />
                    ))
                )}
            </div>
        </div>
    );
};

export default LocationContainer;
