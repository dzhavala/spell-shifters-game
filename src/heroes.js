import { Y, B, G, R } from './const';
import Hero from './classes/hero';

export const hero1 = new Hero("Egemon", [R,G,Y,B,Y]);
export const hero2 = new Hero("Alex", [R,G,Y,B,B]);
export const hero3 = new Hero("Steve", [R,G,Y,B,G]);
export const hero4 = new Hero("Amogus", [R,G,Y,B,R]);

export const heroesArray = [hero1, hero2, hero3, hero4];

export const getNewHeroes = () => {
  const hero1 = new Hero("Egemon", [R,G,Y,B,Y]);
  const hero2 = new Hero("Alex", [R,G,Y,B,B]);
  const hero3 = new Hero("Steve", [R,G,Y,B,G]);
  const hero4 = new Hero("Amogus", [R,G,Y,B,R]);
  return [hero1, hero2, hero3, hero4];
}