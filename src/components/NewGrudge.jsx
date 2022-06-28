import React, {useContext, useState} from 'react';
import {GrudgeContext} from "../GrudgeContext";

const  NewGrudge = React.memo(({}) => {
    const[person, setPerson] = useState("")
    const[reason, setReason] = useState("")

    const {addGrudge} = useContext(GrudgeContext);

    function handleSubmit(event) {
        event.preventDefault();
        addGrudge({
            person, reason
        })
        setPerson("");
        setReason("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Person"
                value={person}
                onChange={(event) => {
                    setPerson(event.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Reason"
                value={reason}
                onChange={(event) => {
                    setReason(event.target.value)
                }}
            />
            <input type="submit" value="Add"/>
        </form>
    );
})

export default NewGrudge;