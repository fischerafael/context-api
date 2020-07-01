import React, { useContext } from 'react'
import { TeamContext } from '../../TeamContext'

function Team({ team, color }) {

    const [teams, setTeams] = useContext(TeamContext)

    function removeTeam(index) {
        setTeams(teams.filter(team=>team.name !== index))
    }

    return (
        <div>
            <h2>{team}</h2>
            <p>{color}</p>
            <button onClick={()=>{removeTeam(team)}}>Deletar Item</button>
        </div>
    )
}

export default Team
