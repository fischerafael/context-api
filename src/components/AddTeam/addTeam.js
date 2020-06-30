import React, { useState, useContext } from 'react'
import { TeamContext } from '../../TeamContext'

function AddTeam() {

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [teams, setTeams] = useContext(TeamContext)

    function addNewTeam(e) {
        e.preventDefault()
        setTeams(prevTeams => [...prevTeams, {name: name, color: color}])
    }

    return (
        <form onSubmit={addNewTeam}>
            <input type="text" name="name" onChange={e=>setName(e.target.value)} value={name}/>
            <input type="text" name="color" onChange={e=>setColor(e.target.value)} value={color}/>
            <button>Submit</button>
        </form>
    )
}

export default AddTeam
