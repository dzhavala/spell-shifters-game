import { Y, B, G, R,  SHIFT_SCROLL, HEAL_POTION, RUNE } from '../const';
import { randomInt } from '../utils';

const MAX_SPELLS = 5;
const MIN_SPELLS = 4;
const START_SHIFT_SPELL_SCROLLS = 1;
const START_HEAL_POTION = 0;
const START_RUNES = 0;


export default class Hero {
  constructor(name, spells) {
    this.name = name;
    this.spells = spells.slice(0, MAX_SPELLS).sort();
    this.shiftSpellScrolls = START_SHIFT_SPELL_SCROLLS;
    this.healPotions = START_HEAL_POTION;
    this.runes = START_RUNES;
    this.monsterTrophies = [];
  }

  getSpells() {
    return [...this.spells];
  }

  getStrongestSpell() {
    return [...this.spells].sort((a,b) =>
    this.spells.filter(v => v===a).length - this.spells.filter(v => v===b).length
    )[this.spells.length - 1];
  }

  useShiftSpellScroll() {
    this.shiftSpellScrolls && this.shiftSpellScrolls--;
  }

  addShiftSpellScroll(num = 1) {
    this.shiftSpellScrolls += num;
  }

  addHealPotion() {
    if(this.spells.length < MAX_SPELLS) {
      this.addRandomSpell();
    } else {
      this.healPotions++;
    }
  }

  addRune() {
    this.runes++;
  }

  useRunes(runesUsedCount) {
    this.runes-=runesUsedCount;
  }

  hit() {
    if(this.healPotions) {
      this.useHealPotion();
    } else if (this.spells.length > MIN_SPELLS) {
      this.removeRandomSpell();
    };
  }

  useHealPotion() {
    this.healPotions && this.healPotions--;
  }

  removeRandomSpell() {
    const spellIndex = this.spells[Math.floor(Math.random() * this.spells.length)];
    this.spells.splice(spellIndex - 1, 1);
  }

  addRandomSpell() {
    const possibleSpells = [Y, B, G, R];
    // first try to add spell type missed in heroes spells list
    const missedSpells = possibleSpells.filter(s => !this.spells.includes(s));
    let spell;
    if (missedSpells.length) {
      spell = missedSpells.pop();
    } else {
      // otherwise add random spell
      spell = possibleSpells[Math.floor(Math.random() * possibleSpells.length)];
    }
    this.spells.push(spell);
  }

  addMonsterTrophy(monster) {
    this.monsterTrophies.push(monster);
  }

  getMonsterTrophiesCount() {
    return this.monsterTrophies.length;
  }

  getMonsterTrophiesPoints() {
    return this.monsterTrophies.reduce((acc, monster) => acc + monster.getStrength(), 0);
  }

  getTotalPoints() {
    return this.getMonsterTrophiesPoints() + this.runes + this.healPotions + this.shiftSpellScrolls;
  }

  giveRandomTreasure() {
    let treasureGift = [SHIFT_SCROLL, HEAL_POTION, RUNE][randomInt(3)];

    if( this.spells.length < MAX_SPELLS) {
      treasureGift = HEAL_POTION;
    }

    switch (treasureGift) {
      case SHIFT_SCROLL:
        this.addShiftSpellScroll();
        break;
      case HEAL_POTION:
        this.addHealPotion();
        break;
      case RUNE:
        this.addRune();
        break;
      default:
        return;
    }
  }
}