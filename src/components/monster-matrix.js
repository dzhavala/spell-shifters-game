import React from 'react';
// import * as math from 'mathjs';

export default function MonsterMatrix({monsterSpellsMatrixOnBiome}) {
  const monsterArr = monsterSpellsMatrixOnBiome.valueOf();

  return (
    <div className="monster-matrix">
      <div className="spells-matrix">
        {monsterArr.map((spellsRow, index) => <div key={index} className="spells">{spellsRow.map((spell, index) => <span key={index} className={`spell spell-${spell}`}>{spell}</span>)}</div>)}
      </div>
    </div>
  );
};
