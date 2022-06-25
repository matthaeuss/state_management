import React from 'react';

function Grudge({grudge: {person, reason, forgiven}}) {
    return (
        <div>
            <h3>{person}</h3>
            <p>{reason}</p>
            <label htmlFor="forgiven">Forgiven</label>
            <input
                type="text"
                id="forgiven"
                checked={forgiven}
                onChange={() => {}}
            />
        </div>
    );
}

export default Grudge;