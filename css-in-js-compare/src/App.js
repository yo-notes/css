import React from 'react';
import './App.css';
import StyledBread from './StyledComponents';
import EmotionBread from './Emotion';
import JssBread from './JSS';
import RawBread from './Raw';

function App() {
  return (
    <div className="App">
      <RawBread />
      <StyledBread />
      <EmotionBread />
      <JssBread />
    </div>
  );
}

export default App;
