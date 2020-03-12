import React from 'react';
import './app.css';
import ScoreTable from '../score-table';
import Header from '../header';


const App = () => {
  return (
    <main role='main' className="container">
      <Header />
      <ScoreTable />
    </main>
  );
}

export default App;
