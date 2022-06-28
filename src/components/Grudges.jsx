import React, {useContext} from 'react';
import Grudge from "./Grudge";
import {GrudgeContext} from "../GrudgeContext";

function Grudges() {
    const {grudges} = useContext(GrudgeContext)

    return (
        <div>
            <h2>Grudges: ({grudges.length})</h2>
            {grudges.map((grudge) => (
                <Grudge key={grudge.id} grudge={grudge}/>
            ))}
        </div>
    );
}

export default Grudges;