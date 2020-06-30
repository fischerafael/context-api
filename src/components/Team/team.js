import React from 'react'

function Team({ team, color }) {
    return (
        <div>
            <h2>{team}</h2>
            <p>{color}</p>
        </div>
    )
}

export default Team
