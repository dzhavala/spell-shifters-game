import MonstersOnBiomes from './monsters-on-biomes';
import CompetitiveMode from './competitive-mode';


function App() {
  return (
    <div className="App">
      <h2>The Spells shifters game</h2>
      <CompetitiveMode/>
      <br /><br /><br /><br />
      <hr/>
      <h1>Monsters statistic</h1>
      <MonstersOnBiomes/>
    </div>
  );
}
console.log('-------');

export default App;
