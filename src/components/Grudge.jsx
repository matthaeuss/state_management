import React, {useContext} from 'react';
import {GrudgeContext} from "../GrudgeContext";

const Grudge = React.memo(({grudge: {id, person, reason, forgiven}}) => {
    const {toggleForgiveness} = useContext(GrudgeContext)
    const forgive = () => toggleForgiveness(id);

    return (
        <div>
            <h3>{person}</h3>
            <p>{reason}</p>
            <label htmlFor="forgiven">Forgiven</label>
            <input
                type="checkbox"
                id="forgiven"
                checked={forgiven}
                onChange={forgive}
            />
        </div>
    );
})

export default Grudge;