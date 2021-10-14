import { biomesArray } from './biomes';
import { heroesArray } from './heroes';

import { randomInt, randomWeighted, getMonsterTrophiesCountOutsiderHero, getMonsterTrophiesCountLeaderHero, getMonsterTrophiesCountHeroesDiff, heroTurn } from './utils';


import Turn from './components/turn';
import TurnHero from './components/turn-hero';

const turnRecords = window.turnRecords = [];
const roundsCount = 10;

for (let index = 0; index < roundsCount; index++) {
  const outsiderHero = getMonsterTrophiesCountOutsiderHero(heroesArray);
  const leaderHero = getMonsterTrophiesCountLeaderHero(heroesArray);
  if(getMonsterTrophiesCountHeroesDiff(leaderHero, outsiderHero) >= 2) {
    outsiderHero.giveRandomTreasure();
  }

  heroesArray.forEach((hero) => {
    const prefferableBiomeType = hero.getStrongestSpell();
    const prefferableBiome = biomesArray.find(b => b.type === prefferableBiomeType);
    const randomBiome = biomesArray[randomInt(biomesArray.length)];
    let currentBiome = [prefferableBiome, randomBiome][randomWeighted({0: .8, 1: .2})];
    // if(!(index && index % 4)) { // every 4-th iteration add a tile to the biome
    //   heroTurn({hero, biome: currentBiome});
    // }

    if(hero === outsiderHero) {
      currentBiome = randomBiome;
      turnRecords.push([
        heroTurn({hero, biome: currentBiome}),
        heroTurn({hero, biome: currentBiome})
      ]);
    } else {
      turnRecords.push(heroTurn({hero, biome: currentBiome}))
    }
  })
}

  // console.log('-', {
  //   wins: fightResultsArray.filter(x => x).length,
  //   fails: fightResultsArray.filter(x => !x).length,
  //   shiftSpellUseCount,
  //   fightResultsArray,
  //   spellComparisonFailuresArray,
  // });

const turnRecordsByHero = turnRecords.reduce((acc, turn) => {
  const { name } = turn.hero || turn[0].hero;
  if (!acc[name]) {
    acc[name] = [];
  }
  acc[name].push(turn);
  return acc;
}, {});

console.log({turnRecordsByHero});

export default function CompetitiveMode() {
  return (
    <div>
      <div className="heroesRecords final">
        {Object.entries(turnRecordsByHero).map(([key, value]) => <div className="heroRecords" key={key}>
          <TurnHero hero={value[0].hero || value[0][0].hero} />
        </div>)}
      </div>
        <hr />
      {/* {turnRecords.map(turnRecord => <Turn key={turnRecord.key} turnRecord={turnRecord} />)} */}
      <div className="heroesRecords">
        {Object.entries(turnRecordsByHero).map(([key, value]) => <div className="heroRecords" key={key}>
          <h3>{key}</h3>
          {value.map((turnRecord, index ) => {
            return Array.isArray(turnRecord)
              ? <div className="doubleTurn" key={index}>
                  {turnRecord.map(turnRecordInner => {
                    return <Turn key={turnRecordInner.key} turnRecord={turnRecordInner} />
                  })}
                </div>
              : <Turn key={turnRecord.key} turnRecord={turnRecord} />
          })}
        </div>)}
      </div>
    </div>
  );
}