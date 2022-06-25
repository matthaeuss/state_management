import React from 'react';
import Grudge from "./Grudge";

function Grudges({grudges = []}) {
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