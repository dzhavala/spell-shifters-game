import React from 'react';
import { Y, B, G, R } from '../const';

export default function TurnPhaseShiftSpellUsed({shiftSpell}) {

  function getCurrentShiftSpellFromArray(shiftSpell) {
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

  const spell = getCurrentShiftSpellFromArray(shiftSpell);

  return (
    <div className="shiftSpellUsed">
      <span className="label">Shift scroll:</span>
      <div className="spells">
        <span className={`spell spell-${spell}`}></span>
      </div>
    </div>
  );
};
