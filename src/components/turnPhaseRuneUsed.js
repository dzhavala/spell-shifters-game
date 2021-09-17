import React from 'react';
import { Y, B, G, R } from '../const';

export default function TurnPhaseRuneUsed({runes}) {

  // function getCurrentShiftSpellFromArray(runes) {
  //   switch (JSON.stringify(shiftSpell)) {
  //     case '[-1,0]':
  //       return Y;
  //     case '[0,1]': 
  //       return B;
  //     case '[1,0]':
  //       return G;
  //     case '[0,-1]':
  //       return R;
  //     default:
  //       return false; 
  //   }
  // }

  // const spell = getCurrentShiftSpellFromArray(runes);

  return (
    <div className="runeUsed">
      <span className="label">Rune:</span>
      <div className="spells">
        {runes.map(({spell}) =><span key={spell} className={`spell spell-${spell}`}></span> )}
      </div>
    </div>
  );
};
