import React from 'react';
import TurnHero from './turn-hero';
import './turn.css';
import BiomeMatrix from './biome-matrix';
import MonsterMatrix from './monster-matrix';
import TurnPhaseFailureRecord from './turnPhaseFailureRecord';
import TurnPhaseShiftSpellUsed from './turnPhaseShiftSpellUsed';
import TurnPhaseRuneUsed from './turnPhaseRuneUsed';

export default function Turn({turnRecord}) {
  // console.log(turnRecord);
  if (!turnRecord.monster) {
    return <div className={`turn ${turnRecord.biome.name}`}>
      <div className="treasure">
        {turnRecord.findShiftScroll && <span className="shiftSpell">Shift spell scroll <br/><b>{turnRecord.heroStatus.shiftSpellScrollsLeft}</b></span>}
        {turnRecord.findHealPotion && <span className="healPotion">Heal potion<br/><b>{turnRecord.heroStatus.healPotionsLeft}</b></span>}
        {turnRecord.findRune && <span className="rune">Rune<br/><b>{turnRecord.heroStatus.runesLeft}</b></span>}
      </div>
    </div>
  }
  return (
    <div className={`turn ${turnRecord.isSuccess ? 'isSuccess' : 'isFailure'} ${turnRecord.biome.name}`}>
      <div className="turnDescription">
        <TurnHero hero={turnRecord.hero} heroStatus={turnRecord.phases[0].heroStatus} />
        vs
        <span className="meetDetails"><b>{turnRecord.monster.name}</b> on the <b>{turnRecord.biome.name}</b> biome</span>
      </div>
      <div className="turnContent">
        {turnRecord.phases.map((phase, index) => <div className="turnPhase" key={index}>
            <div className="monsterAndBiomeMatrixes">
              <BiomeMatrix biome={turnRecord.biome}/>
              <MonsterMatrix monsterSpellsMatrixOnBiome={phase.monsterSpellsMatrixOnBiome}/>
            </div>
            {phase.shiftSpellWasUsed && <TurnPhaseShiftSpellUsed shiftSpell={phase.shiftSpell}/>}
            {phase.runesWasUsed && <TurnPhaseRuneUsed runes={phase.runes}/>}
            {phase.failureRecord && <TurnPhaseFailureRecord className="failureRecord" failureRecord={phase.failureRecord}/>}
        </div>)}
      </div>
    </div>
  );
};
