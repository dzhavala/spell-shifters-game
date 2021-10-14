import  React, { useState }  from 'react';
import MonstersOnBiomes from './monsters-on-biomes';
import CompetitiveMode from './competitive-mode';


function App() {
  const [showMonstersOnBiomes, setShowMonstersOnBiomes] = useState(false);
  return (
    <div className="App">
      <h2>The Spells shifters game</h2>
      <CompetitiveMode/>
      <br /><br /><br /><br />
      <hr/>
      <label>
        <input type="checkbox" checked={showMonstersOnBiomes} onChange={() => setShowMonstersOnBiomes(!showMonstersOnBiomes)} />
        Show monsters statistic (wait to render)
      </label>
      {showMonstersOnBiomes && <>
        <h1>Monsters statistic</h1>
        <MonstersOnBiomes/>
      </>}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
console.log('-------');

export default App;
