import { biomesArray } from './biomes';
import { getNewHeroes } from './heroes';
import { monstersArray } from './monsters';

import { fightWithMonster, getMonsterWithShiftedMatrix, getCurrentHeroStatus, fightWithMonsterUsingSpellsTestAllDirections } from './utils';

import Turn from './components/turn';

const heroesArray = getNewHeroes();
const turnRecords = window.turnRecordsMonstersOnBiomes = [];
console.log({heroesArray});

export const attackMonster = ({hero, monster, biome, turnRecord}) => {
  let currentMonster = monster;
  let fightResult = fightWithMonster({ hero, monster, biome });
  turnRecord.phases.push(fightResult);

  if (!fightResult.isSuccess && hero.shiftSpellScrolls) {
    fightResult = fightWithMonsterUsingSpellsTestAllDirections({ hero, monster: currentMonster, biome, prevFightResult: fightResult });
    currentMonster = getMonsterWithShiftedMatrix(currentMonster, fightResult.shiftSpell);
    turnRecord.phases.push(fightResult);
    if (!fightResult.isSuccess && fightResult.shiftSpell && hero.shiftSpellScrolls) {
      fightResult = fightWithMonsterUsingSpellsTestAllDirections({ hero, monster: currentMonster, biome, prevFightResult: fightResult });
    }
  }

  turnRecord.isSuccess = fightResult.isSuccess;
  return turnRecord;
}

export const heroTurn = ({hero, biome, monster}) => {
  const turnRecord = {
    key: Math.random(),
    hero,
    biome,
    monster,
    phases: [],
  };
  return {
    ...attackMonster({hero, monster, biome, turnRecord}),
    heroStatus: getCurrentHeroStatus(hero)
  };
}

monstersArray.forEach((monster) => {
  biomesArray.forEach((biome) => {
    heroesArray.forEach((hero) => {
      hero.addShiftSpellScroll(100)
      turnRecords.push( 
        heroTurn({ hero, monster, biome })
      )
    })
  })
})

const turnRecordsByMonsters = turnRecords.reduce((acc, turn) => {
  const { biome: { name: biomeName }, monster: { name: monsterName } } = turn;
  if (!acc[monsterName]) {
    acc[monsterName] = {};
  }
  if (!acc[monsterName][biomeName]) {
    acc[monsterName][biomeName] = []
  }
  acc[monsterName][biomeName].push(turn);
  return acc;
}, {});

export default function MonstersOnBiomes() {
  return (
    <div className="monstersRecords">
      {Object.entries(turnRecordsByMonsters).map(([monsterName, biomes]) => <div className="monsterRecords" key={monsterName}>
        <h3>{monsterName}</h3>
        {Object.entries(biomes).map(([biomeName, heroes]) => {
          return <div className="biomeRecords" key={biomeName + monsterName}>
            <h4>{biomeName}</h4>
            {heroes.map(turnRecord => <Turn key={turnRecord.key + biomeName + monsterName} turnRecord={turnRecord} />)}
          </div>
        })} 
      </div>)}
    </div>
  );
}