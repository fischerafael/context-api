import React from 'react';
import './App.css';

import TeamList from './components/TeamList/teamList'
import Nav from './components/Nav/nav'
import AddTeam from './components/AddTeam/addTeam'

import { TeamProvider } from './TeamContext'

function App() {
  return (
    <TeamProvider>
      <div>
        <Nav />
        <AddTeam />
        <TeamList />
      </div>
    </TeamProvider>
    
  );
}

export default App;
