import React from 'react';
import './app.css';
import ScoreTable from '../score-table';


const App = () => {
  return (
    <main role='main' className="container">
      <header className="header">Score Table</header>
      <ScoreTable />
    </main>
  );
}

export default App;
