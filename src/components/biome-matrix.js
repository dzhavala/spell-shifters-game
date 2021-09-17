import React from 'react';
// import * as math from 'mathjs';

export default function BiomeMatrix({biome}) {
  const biomeArr = biome.matrix.valueOf();

  return (
    <div className="biome-matrix">
      <div className="spells-matrix">
        {biomeArr.map((spellsRow, index) => <div key={index} className="spells">{spellsRow.map((spell, index) => <span key={index} className={`spell spell-${spell}`}>{spell}</span>)}</div>)}
      </div>
    </div>
  );
};
