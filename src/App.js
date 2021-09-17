
import { SHIFT_SCROLL, HEAL_POTION, RUNE, MONSTER } from './const';
import { monstersArray } from './monsters';
import { biomesArray } from './biomes';
import { heroesArray } from './heroes';

import { fightWithMonster, fightWithMonsterUsingSpellsTestAllDirections, fightWithMonsterUsingRunes, getCurrenHeroStatus, getMonsterWithShiftedMatrix, randomInt, randomWeighted, getFailedSpellsCount, getMonsterTrophiesCountOutsiderHero, getMonsterTrophiesCountLeaderHero, getMonsterTrophiesCountHeroesDiff } from './utils';

import Turn from './components/turn';
import TurnHero from './components/turn-hero';

const turnRecords = window.turnRecords = [];


const attackMonster = ({hero, monster, biome, turnRecord}) => {
  let currentMonster = monster;
  let fightResult = fightWithMonster({ hero, monster, biome });
  turnRecord.phases.push(fightResult);

  if (!fightResult.isSuccess && hero.shiftSpellScrolls) {
    fightResult = fightWithMonsterUsingSpellsTestAllDirections({ hero, monster: currentMonster, biome, prevFightResult: fightResult });
    currentMonster = getMonsterWithShiftedMatrix(currentMonster, fightResult.shiftSpell);
    turnRecord.phases.push(fightResult);
    if (!fightResult.isSuccess && fightResult.shiftSpell && hero.shiftSpellScrolls &&!!randomWeighted({0: .4, 1: .6})) {
      fightResult = fightWithMonsterUsingSpellsTestAllDirections({ hero, monster: currentMonster, biome, prevFightResult: fightResult });
      currentMonster = getMonsterWithShiftedMatrix(currentMonster, fightResult.shiftSpell);
      turnRecord.phases.push(fightResult);
    }
  }

  if (!fightResult.isSuccess && hero.runes >= getFailedSpellsCount(fightResult)) {
    // console.log({hero});
    fightResult = fightWithMonsterUsingRunes({ hero, monster: currentMonster, biome, prevFightResult: fightResult });
    // console.log({fightResult});
    turnRecord.phases.push(fightResult);
  }

  turnRecord.isSuccess = fightResult.isSuccess;
  if (fightResult.isSuccess) {
    hero.addMonsterTrophy(monster);
  } else {
    hero.hit();
  }
}


const heroTurn = ({hero, monster, biome}) => {
  const turnRecord = {
    key: Math.random(),
    hero,
    // monster,
    biome,
    phases: [],
  };

  const possibleEncounters = [MONSTER, SHIFT_SCROLL, HEAL_POTION, RUNE];
  // const currentEncounter = possibleEncounters[Math.floor(Math.random() * possibleEncounters.length)];
  const currentEncounter = possibleEncounters[randomWeighted({0: .6, 1: .2, 2: .1, 3: .1})];

  if(currentEncounter === MONSTER) {
    const monster = monstersArray[Math.floor(Math.random() * monstersArray.length)];
    turnRecord.monster = monster;
    attackMonster({hero, monster, biome, turnRecord});
  } else if (currentEncounter === SHIFT_SCROLL) {
    turnRecord.findShiftScroll = true;
    hero.addShiftSpellScroll();
  } else if (currentEncounter === HEAL_POTION) {
    turnRecord.findHealPotion = true;
    hero.addHealPotion();
  } else if (currentEncounter === RUNE) {
    turnRecord.findRune = true;
    hero.addRune();
  }

  turnRecords.push({...turnRecord, heroStatus: getCurrenHeroStatus(hero)});
  // console.log({turnRecord});
}




  // const biome = biomesArray[0].matrix;
  // const monster = monstersArray[2].matrix;
  // const heroSpells = heroesArray[0].spells;
  // const monsterSpells = monstersArray[0].matrix;
  // const biomeSpells = biomesArray[0].matrix;

  // heroTurn({hero: heroesArray[0], biome: biomesArray[3]});
  // heroTurn({hero: heroesArray[0], biome: biomesArray[1]});
  // heroTurn({hero: heroesArray[2], biome: biomesArray[2]});
  // heroTurn({hero: heroesArray[2], biome: biomesArray[3]});
  
  // heroesArray.forEach((hero, index) => {
  //   console.groupCollapsed(`Hero ${index}`);
  //   biomesArray.forEach(biome => {
  //     heroTurn({hero, biome});
  //     heroTurn({hero, biome});
  //     console.log({hero});
  //   })
  //   console.groupEnd();
  //   console.log('-', {
  //     wins: turnRecords.filter(t=>t.hero === hero).filter(x=> x.monster && x.isSuccess),
  //     fails: turnRecords.filter(t=>t.hero === hero).filter(x=> x.monster && !x.isSuccess),
  //     scrolls: turnRecords.filter(t=>t.hero === hero).filter(x=> !x.monster),
  //     // shiftSpellUseCount,
  //     // fightResultsArray,
  //     // spellComparisonFailuresArray,
  //   });
  //   // shiftSpellUseCount = 0;
  //   // fightResultsArray = [];
  //   // spellComparisonFailuresArray = [];
  // })

  const roundsCount = 10;
  for (let index = 0; index < roundsCount; index++) {
    const outsiderHero = getMonsterTrophiesCountOutsiderHero(heroesArray);
    const leaderHero = getMonsterTrophiesCountLeaderHero(heroesArray);
    if(getMonsterTrophiesCountHeroesDiff(leaderHero, outsiderHero) >= 2) {
      // outsiderHero.giveRandomTreasure();
    }

    heroesArray.forEach((hero) => {
      const prefferableBiomeType = hero.getStrongestSpell();
      const prefferableBiome = biomesArray.find(b => b.type === prefferableBiomeType);
      const randomBiome = biomesArray[randomInt(biomesArray.length)];
      let currentBiome = [prefferableBiome, randomBiome][randomWeighted({0: .8, 1: .2})];
      // if(!(index && index % 4)) { // every 4-th eteration add a tile to the biome
      //   heroTurn({hero, biome: currentBiome});
      // }

      if(hero === outsiderHero) {
        currentBiome = randomBiome;
        heroTurn({hero, biome: currentBiome});
      }
      heroTurn({hero, biome: currentBiome});
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
    if (!acc[turn.hero.name]) {
      acc[turn.hero.name] = [];
    }
    acc[turn.hero.name].push(turn);
    return acc;
  }, {});

  console.log({turnRecordsByHero});

function App() {
  return (
    <div className="App">
      <h2>The Spells shifters game</h2>
      <div className="heroesRecords final">
        {Object.entries(turnRecordsByHero).map(([key, value]) => <div className="heroRecords" key={key}>
          <TurnHero hero={value[0].hero} />
        </div>)}
      </div>
        <hr />
      {/* {turnRecords.map(turnRecord => <Turn key={turnRecord.key} turnRecord={turnRecord} />)} */}
      <div className="heroesRecords">
        {Object.entries(turnRecordsByHero).map(([key, value]) => <div className="heroRecords" key={key}>
          <h3>{key}</h3>
          {value.map(turnRecord => {
            return <Turn key={turnRecord.key} turnRecord={turnRecord} />
          })}
        </div>)}
      </div>
      
      
    </div>
  );
}
console.log('-------');

export default App;
