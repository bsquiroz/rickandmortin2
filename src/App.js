import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";
import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";

function App() {
    const [numberUniverse, setNumberUniverse] = useState();
    const [universe, setUniverse] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const GetUniverse = async () => {
            let URL = "https://rickandmortyapi.com/api/location";

            if (numberUniverse) {
                URL = `https://rickandmortyapi.com/api/location/${numberUniverse}`;
                const auxResponse = await axios(URL);
                setUniverse(auxResponse.data);
                return;
            }

            const response = await axios(URL);
            const count = response.data.info.count;
            let countRandom = Math.floor(Math.random() * count);
            if (countRandom === 0) {
                countRandom = Math.floor(Math.random() * count);
            }
            URL = `https://rickandmortyapi.com/api/location/${countRandom}`;
            const auxResponse = await axios(URL);
            setUniverse(auxResponse.data);
        };
        GetUniverse();
    }, [numberUniverse]);

    return (
        <div className="container-rm">
            <div className="banner">
                <SearchBox
                    setNumberUniverse={setNumberUniverse}
                    error={error}
                    setError={setError}
                />
            </div>
            {error ? (
                <ErrorBox msg={"Verifica los datos ingresados"} />
            ) : (
                universe && <LocationContainer universe={universe} />
            )}
            <Footer />
        </div>
    );
}

export default App;
