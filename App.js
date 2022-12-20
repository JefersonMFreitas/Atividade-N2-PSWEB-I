import React from 'react';
import './App.css'
import TwitterPanel from './components/TwitterPanel';
import TwitterPanel from './components/BrasileiraoPanel';

function App() {
  return (
    <div className="app">
      <TwitterPanel />
      <BrasileiraoPanel />
    </div>
  )
}

export default App;
