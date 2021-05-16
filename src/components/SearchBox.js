import React, { useState } from "react";

const initialState = {
    name: "",
};

const SearchBox = ({ setNumberUniverse, setError, error }) => {
    const [universe, setUniverse] = useState(initialState);
    const { name } = universe;

    const handleName = (e) => {
        setUniverse({
            ...universe,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (name.trim() === "" || name.trim() > 108 || name.trim() <= 0) {
            setError(true);
            return;
        }

        setError(false);
        setNumberUniverse(name);
        setUniverse(initialState);
    };
    return (
        <>
            <form onSubmit={onSubmitForm} className="form">
                <input
                    type="number"
                    placeholder="Ingresa el # del universo"
                    value={name}
                    onChange={handleName}
                    name="name"
                />
            </form>
        </>
    );
};

export default SearchBox;
