import * as math from 'mathjs';
import { Y, B, G, R } from './const';
import Biome from './classes/biome';

export const biome1 = new Biome("Desert", Y, math.matrix([
  [R,Y,Y,Y,Y,Y,Y],
  [R,Y,Y,Y,Y,Y,Y],
  [R,R,Y,Y,Y,B,B],
  [R,R,R,Y,B,B,B],
  [R,R,R,G,B,B,B],
  [R,R,G,G,G,B,B],
  [G,G,G,G,G,G,B],
]));

export const biome2 = new Biome("River", B, math.matrix([
  [Y,Y,Y,Y,Y,Y,Y],
  [R,Y,Y,Y,Y,B,B],
  [R,Y,Y,Y,B,B,B],
  [R,R,R,B,B,B,B],
  [R,R,G,G,B,B,B],
  [R,G,G,G,B,B,B],
  [G,G,G,G,G,G,B],
]));

export const biome3 = new Biome("Forest", G, math.matrix([
  [Y,Y,Y,Y,Y,Y,Y],
  [R,Y,Y,Y,Y,B,B],
  [R,R,R,Y,B,B,B],
  [R,R,R,G,B,B,B],
  [R,G,G,G,B,B,B],
  [G,G,G,G,G,G,B],
  [G,G,G,G,G,G,B],
]));

export const biome4 = new Biome("Fireland", R, math.matrix([
  [R,Y,Y,Y,Y,Y,Y],
  [R,R,Y,Y,Y,Y,B],
  [R,R,R,Y,Y,B,B],
  [R,R,R,R,B,B,B],
  [R,R,R,G,G,B,B],
  [R,R,R,G,G,B,B],
  [G,G,G,G,G,G,B],
]));

export const biomesArray = [biome1, biome2, biome3, biome4];
