import React, { useContext } from 'react'
import { TeamContext } from '../../TeamContext'

function Nav() {
    const [teams, setTeams] = useContext(TeamContext)

    return (
        <nav>
            <h3>Context API test</h3>
            <p>Number of teams {teams.length}</p>            
        </nav>
    )
}

export default Nav
