import React, { useContext } from 'react'
import Team from '../Team/team'
import { TeamContext } from '../../TeamContext'

function TeamList() {
    const [teams, setTeams] = useContext(TeamContext)

    return (
        <div>
            {teams.map(team => (
                <Team team={team.name} color={team.color} />
            ))}
        </div>
    )
}

export default TeamList
