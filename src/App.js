import React from 'react';
import './App.css';
import GlitchClip from 'react-glitch-effect/core/Clip'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GlitchClip>
        <p>
          this is a simple clock app.
        </p>
        </GlitchClip>
      </header>
    </div>
  );
}

export default App;
