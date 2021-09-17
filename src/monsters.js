import * as math from 'mathjs';

import Monster from './classes/monster';

export const monster1 = new Monster("Flower bird", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));

export const monster2 = new Monster("Fire ball", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0],
  [0,0,1,0,0,0,0],
  [0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));

export const monster3 = new Monster("Ktulhu guard", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,1,1,1,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));

export const monster4 = new Monster("Fat imp", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));

export const monster5 = new Monster("Big foot", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));

export const monster6 = new Monster("Furry", math.matrix([
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]));


export const monstersArray = [monster1, monster2, monster3, monster4, monster5, monster6];
