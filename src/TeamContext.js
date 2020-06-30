import React, { useState, createContext } from 'react'

export const TeamContext = createContext()

export function TeamProvider(props) {
    const [teams, setTeams] = useState([
        {
            name: 'Green Bay Packers',
            color: 'Green',
            id: 1
        },
        {
            name: 'Chicago Bears',
            color: 'Blue',
            id: 2
        },
        {
            name: 'Minnesotta Vikings',
            color: 'Purple',
            id: 3
        },
        {
            name: 'Detroit Lions',
            color: 'Blue',
            id: 4
        },
    ])

    return (
        <TeamContext.Provider value={[teams, setTeams]}>
            {props.children}
        </TeamContext.Provider>
    )
}