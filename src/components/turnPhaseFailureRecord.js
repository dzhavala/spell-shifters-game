import React from 'react';

export default function TurnPhaseFailureRecord({failureRecord}) {  
  return (
    <div className="failureRecord">
      <span className="label">Failure diff:</span>
      <div className="spells">
        {failureRecord.map(({spell, diff}) => <span key={spell} className={`spell spell-${spell} ${!diff && 'empty'}`}>{diff ? diff : ' '}</span>)}
      </div>
    </div>
  );
};
