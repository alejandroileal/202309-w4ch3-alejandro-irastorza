export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: 'fighter' | 'king' | 'adviser' | 'squire';
}

export interface King extends Character {
  reignYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillLevel: number;
}

export interface Adviser extends Character {
  adviseTo: Fighter;
}

export interface Squire extends Character {
  serveLevel: number;
  servesTo: Fighter;
}
