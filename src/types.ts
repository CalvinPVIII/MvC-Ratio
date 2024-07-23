export interface Character {
  name: string;
  icon: string;
  portrait: string;
  hyper: string;
  pointCost: number;
  characterSelectOrder: number;
}

export interface Roster {
  [key: string]: Character;
}

export interface RatioSystem {
  name: string;
  description: string;
  maxPoints: number;
  roster: Roster;
}

export interface Team {
  [key: number]: Character | null;
}
