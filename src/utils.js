import * as math from 'mathjs';
import { Y, B, G, R } from './const';
import { SHIFT_SCROLL, HEAL_POTION, RUNE, MONSTER } from './const';
import { monstersArray } from './monsters';

export const randomWeighted = prob => {
  let i, sum=0, r=Math.random();
  for (i in prob) {
    sum += prob[i];
    if (r <= sum) return Number(i);
  }
}

export const randomInt = int => Math.floor(Math.random()) * int;

export const getSpellTypeCount = (spells, spellType) => spells.filter(x=> x === spellType).length;

export const getSpellsCountsDiffByType = (heroSpells, monsterSpells, spellType, runesCount = 0) => getSpellTypeCount(heroSpells, spellType) - getSpellTypeCount(monsterSpells, spellType) + runesCount;

export const saveSpellsComparisonFailureRecord = (heroSpells, monsterSpellsOnBiome) => {
  const getSpellsCountsDiffByTypeY = getSpellsCountsDiffByType(heroSpells, monsterSpellsOnBiome, Y);
  const getSpellsCountsDiffByTypeB = getSpellsCountsDiffByType(heroSpells, monsterSpellsOnBiome, B);
  const getSpellsCountsDiffByTypeG = getSpellsCountsDiffByType(heroSpells, monsterSpellsOnBiome, G);
  const getSpellsCountsDiffByTypeR = getSpellsCountsDiffByType(heroSpells, monsterSpellsOnBiome, R);

  const spellComparisonFailureRecord = [
    {spell: Y, diff: getSpellsCountsDiffByTypeY < 0 ? Math.abs(getSpellsCountsDiffByTypeY) : 0},
    {spell: B, diff: getSpellsCountsDiffByTypeB < 0 ? Math.abs(getSpellsCountsDiffByTypeB) : 0},
    {spell: G, diff: getSpellsCountsDiffByTypeG < 0 ? Math.abs(getSpellsCountsDiffByTypeG) : 0},
    {spell: R, diff: getSpellsCountsDiffByTypeR < 0 ? Math.abs(getSpellsCountsDiffByTypeR) : 0},
  ];

  // spellComparisonFailuresArray.push(spellComparisonFailureRecord);
  return spellComparisonFailureRecord;
}

export const checkSpellsComparisonSuccessByType = (heroSpells, monsterSpells, spellType, runes = []) => {
  const runesByType = runes.find(x=>x.spell === spellType) || {};
  const runesByTypeCount = runesByType.diff || 0;
  return getSpellsCountsDiffByType(heroSpells, monsterSpells, spellType, runesByTypeCount) >= 0;
}

// matrix - math.js matrix, shift - array with shift direction [1,0], [0, -1], ... etc.
export const shiftMatrix = (matrix, shift) => {
  let result = math.zeros(math.size(matrix));
  let shiftFailed = false;

  matrix.forEach((value, index) => {
    if (value) {
      const y = index[0] + shift[0];
      const x = index[1] + shift[1];

      if (y < 0 || y >= math.size(result).valueOf()[0]) {
        shiftFailed = true;
        return false;
      }

      if (x < 0 || x >= math.size(result).valueOf()[1]) {
        shiftFailed = true;
        return false;
      }
      result.subset(math.index(y,x),1);
    }
  });

  if (shiftFailed) {
    result = matrix;
  }

  return result;
};

export const applyMask = (biome, mask) => biome.map((value, index) => value * mask.get(index));

export const compareSpellsCounts = (heroSpells, monsterSpellsOnBiome, runes) => {
  // let unusedRunes = [...runes];
  const compareSpellsCountsByTypeY = checkSpellsComparisonSuccessByType(heroSpells, monsterSpellsOnBiome, Y, runes);
  const compareSpellsCountsByTypeB = checkSpellsComparisonSuccessByType(heroSpells, monsterSpellsOnBiome, B, runes);
  const compareSpellsCountsByTypeG = checkSpellsComparisonSuccessByType(heroSpells, monsterSpellsOnBiome, G, runes);
  const compareSpellsCountsByTypeR = checkSpellsComparisonSuccessByType(heroSpells, monsterSpellsOnBiome, R, runes);

  const isComparisonSuccess = compareSpellsCountsByTypeY
                              && compareSpellsCountsByTypeB
                              && compareSpellsCountsByTypeG
                              && compareSpellsCountsByTypeR;

  return {
    isSuccess: isComparisonSuccess,
    failureRecord: !isComparisonSuccess && saveSpellsComparisonFailureRecord(heroSpells, monsterSpellsOnBiome),
    monsterSpellsOnBiome: monsterSpellsOnBiome.sort(),
    usedRunes: runes
  };  
}

export const getMonsterSpellsOnBiome = (biomeMatrix, mask, shift) => {
  if (shift) {
    mask = shiftMatrix(mask, shift);
  }
  const monsterSpellsMatrixOnBiome = applyMask(biomeMatrix, mask);
  const activeSpells = [];
  monsterSpellsMatrixOnBiome.forEach(value => {
    if (value) {
      activeSpells.push(value);
    }
  });
  return {
    monsterSpellsMatrixOnBiome,
    activeSpells
  };
}

export const excludeSpellsFomPrevShiftDirection = (spells, shiftSpell) => {
  const opositeShiftDirection = getOpositeShiftDirection(shiftSpell);
  const previousSpell = getSpellByShiftDirection(opositeShiftDirection);

  if (previousSpell) {
    return spells.filter(s => s !== previousSpell);
  }

  return spells;
}

export const getOpositeShiftDirection = (shiftSpell) => {
  switch (JSON.stringify(shiftSpell)) {
    case '[-1,0]':
      return [1,0];
    case '[0,1]':
      return [0,-1];
    case '[1,0]':
      return [-1,0];
    case '[0,-1]':
      return [0,1];
    default:
      return [0,0];
  }
}

export const getSpellByShiftDirection = (shiftSpell) => {
  switch (JSON.stringify(shiftSpell)) {
    case '[-1,0]':
      return Y;
    case '[0,1]':
      return B;
    case '[1,0]':
      return G;
    case '[0,-1]':
      return R;
    default:
      return false;
  }
}

export const getShiftDirectionBySpell = (spell) => {
  switch (spell) {
    case Y:
      return [-1, 0];
    case B: 
      return [0, 1];
    case G:
      return [1, 0];
    case R:
      return [0, -1];
    default:
      return [0, 0];
  }
}

export const getSpellsNotReachedLimitInCurrentTest = (heroSpells, monsterSpellsOnBiome) => {
  const result = [];
  heroSpells.map(spell => {
    const heroSpellCount = heroSpells.filter(v => v===spell).length;
    const monsterSpellCount = monsterSpellsOnBiome.filter(v => v===spell).length;
    if (heroSpellCount > monsterSpellCount && !result.includes(spell)) {
      result.push(spell);
    }
    return result;
  });
  return result;
}

export const getOptimalShiftSpellDirection = ({ prevFightResult, hero }) => {
  const { monsterSpellsOnBiome, failureRecord, shiftSpell } = prevFightResult;
  const nonFailedSpells = failureRecord.filter(x=> !x.diff).map(x=> x.spell);
  const nonFailedSpellsExcludingPrevShift = shiftSpell ? excludeSpellsFomPrevShiftDirection(nonFailedSpells, shiftSpell) : nonFailedSpells;
  const spellsNotReachedLimitInCurrentTest = getSpellsNotReachedLimitInCurrentTest(hero.spells, monsterSpellsOnBiome);
  const validSpellsToUse = nonFailedSpellsExcludingPrevShift.filter(spell => spellsNotReachedLimitInCurrentTest.includes(spell));
  const heroStrongestSpell = hero.getStrongestSpell();
  const spellToUse = validSpellsToUse.includes(heroStrongestSpell) ? heroStrongestSpell : validSpellsToUse.pop();

  return getShiftDirectionBySpell(spellToUse);
}

export const getCurrenHeroStatus = hero => ({
  shiftSpellScrollsLeft: hero.shiftSpellScrolls,
  healPotionsLeft: hero.healPotions,
  spells: hero.getSpells(),
  strongestSpell: hero.getStrongestSpell(),
  runesLeft: hero.runes,
});

export const fightWithMonster = ({ hero, monster, biome, shiftSpell, runes }) => {
  const { monsterSpellsMatrixOnBiome, activeSpells } = getMonsterSpellsOnBiome(biome.matrix, monster.matrix, shiftSpell);
  const fightResult = compareSpellsCounts(hero.spells, activeSpells, runes);
  return {
    ...fightResult,
    monsterSpellsMatrixOnBiome,
    shiftSpell,
    runes,
    heroStatus: getCurrenHeroStatus(hero),
  }
}

export const getFailedSpellsCount = fightResult => {
  return getFailedSpells(fightResult).reduce((acc, fail) => {
    return acc + fail.diff;
  }, 0);
}

export const getFailedSpells = (fightResult = {}) => {
  const { failureRecord = [{}] } = fightResult;
  return failureRecord.filter(x=> x.diff);
};

export const fightWithMonsterUsingRunes = ({ hero, monster, biome, prevFightResult }) => {
  const failedSpells = getFailedSpells(prevFightResult);
  const failedSpellsTotalCount = getFailedSpellsCount(prevFightResult);
  if (hero.runes >= failedSpellsTotalCount) {
    hero.useRunes(failedSpellsTotalCount);
    let fightResult = fightWithMonster({ hero, monster, biome, runes: failedSpells });
    return {...fightResult, runesWasUsed: true };
  }

  return prevFightResult;
}

export const fightWithMonsterUsingSpells = ({ hero, monster, biome, shiftSpell }) => {
  let fightResult = fightWithMonster({ hero, monster, biome, shiftSpell });
  return {...fightResult, shiftSpellWasUsed: true };
}

export const fightWithMonsterUsingSpellsTestAllDirections = ({ hero, monster, biome, prevFightResult }) => {
  let fightResultUsingSpellsInOptimalDirection = fightWithMonsterUsingSpellsTestOptimalDirection({ hero, monster, biome, prevFightResult });
  let fightResult = fightResultUsingSpellsInOptimalDirection;
  hero.useShiftSpellScroll();

  const checkAllSpellShiftDirections = randomWeighted({0: .5, 1: .5});

  if (checkAllSpellShiftDirections) {
    fightResult = fightWithMonsterUsingSpells({ hero, monster, biome, shiftSpell: [0,1] });

    if (!fightResult.isSuccess) {
      fightResult = fightWithMonsterUsingSpells({ hero, monster, biome, shiftSpell: [0,-1] });
    }

    if (!fightResult.isSuccess) {
      fightResult = fightWithMonsterUsingSpells({ hero, monster, biome, shiftSpell: [1,0] });
    }

    if (!fightResult.isSuccess) {
      fightResult = fightWithMonsterUsingSpells({ hero, monster, biome, shiftSpell: [-1,0] });
    }

    // If none of spell directions usage succeed, return the optimal direction's figthResult
    if (!fightResult.isSuccess) {
      fightResult = fightResultUsingSpellsInOptimalDirection;
    }
  }

  return fightResult;
}

export const fightWithMonsterUsingSpellsTestOptimalDirection = ({ hero, monster, biome, prevFightResult }) => {
  const optimalShiftSpellDirection = getOptimalShiftSpellDirection({ prevFightResult, hero });
  return fightWithMonsterUsingSpells({ hero, monster, biome, shiftSpell:optimalShiftSpellDirection });
}

export const getMonsterWithShiftedMatrix = (monster, shiftSpell) => ({
  ...monster,
  matrix: shiftMatrix(monster.matrix, shiftSpell),
});

export const getMonsterTrophiesCountOutsiderHero = (heroesArray) => {
  let outsider = heroesArray[0];
  heroesArray.forEach(hero => {
    if (hero !== outsider && hero.getMonsterTrophiesCount() < outsider.getMonsterTrophiesCount()) {
      outsider = hero;
    }
  });
  return outsider;
}

export const getMonsterTrophiesCountLeaderHero = (heroesArray) => {
  let leader = heroesArray[heroesArray.length - 1];
  heroesArray.forEach(hero => {
    if (hero !== leader && hero.getMonsterTrophiesCount() > leader.getMonsterTrophiesCount()) {
      leader = hero;
    }
  });
  return leader;
}

export const getMonsterTrophiesCountHeroesDiff = (leader, outsider) => {
  return leader.getMonsterTrophiesCount() - outsider.getMonsterTrophiesCount();
}

export const attackMonster = ({hero, monster, biome, turnRecord}) => {
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


export const heroTurn = ({hero, biome}) => {
  const turnRecord = {
    key: Math.random(),
    hero,
    biome,
    phases: [],
  };

  const possibleEncounters = [MONSTER, SHIFT_SCROLL, HEAL_POTION, RUNE];
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

  return {
    ...turnRecord,
    heroStatus: getCurrenHeroStatus(hero)
  };
}
