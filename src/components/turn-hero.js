import React from 'react';

export default function TurnHero({hero, heroStatus}) {
  const heroStrongestSpell = heroStatus ? heroStatus.strongestSpell : hero.getStrongestSpell();
  const shiftSpellScrollsLeft = heroStatus ? heroStatus.shiftSpellScrollsLeft : hero.shiftSpellScrolls;
  const runesLeft = heroStatus ? heroStatus.runesLeft : hero.runes;
  const healPotionsLeft = heroStatus ? heroStatus.healPotionsLeft : hero.healPotions;
  const spells = heroStatus ? heroStatus.spells : hero.spells;

  return (
    <div className="hero">
      <h3>{hero.name}</h3>
      <div>Shifts Scrolls: <b>{shiftSpellScrollsLeft}</b></div>
      <div>Runes: <b>{runesLeft}</b></div>
      <div>Heal potions: <b>{healPotionsLeft}</b></div>
      <div className="spells">
        {spells.map((spell, index) => <span key={index} className={`spell spell-${spell}`}>{spell}</span>)}
      </div>
      <span className="spells">
        Strongest: <span className={`spell spell-${heroStrongestSpell}`}>{heroStrongestSpell}</span>
     </span>
     <div className="monsterTrophies">Monsters trophies: <b>{hero.getMonsterTrophiesCount()}/{hero.getMonsterTrophiesPoints()}</b><br/>
     Total points: <b>{hero.getTotalPoints()}</b></div>
    </div>
  );
};
