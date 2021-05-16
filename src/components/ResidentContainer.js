import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ resident }) => {
    const [infoResident, setInfoResident] = useState();

    useEffect(() => {
        const getResident = async () => {
            const response = await axios.get(resident);
            setInfoResident(response.data);
        };
        getResident();
    }, [resident]);

    return (
        <div>
            {infoResident && <ResidentInfo infoResident={infoResident} />}
        </div>
    );
};

export default ResidentContainer;
