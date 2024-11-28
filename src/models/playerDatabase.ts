import { SaveData } from "./saveData";

export interface Player {
  name: string;
  rankLevel: number;
  expPoints: number;
  bio: string;
  enemiesDestroyed: number;
  totalScore: number;
  highestScore: number;
  coinsCollected: number;
  avatarIndex: number;
  colorIndex: number;
  userId: number;
  saveDatas: Array<SaveData>;
}

export const playerDatabase: Player[] = [
  {
    name: "Patrocinio",
    rankLevel: 1,
    expPoints: 0,
    bio: "Mestre do Universo",
    enemiesDestroyed: 0,
    totalScore: 250,
    highestScore: 250,
    coinsCollected: 0,
    avatarIndex: 1,
    colorIndex: 1,
    userId: 1,
    saveDatas: [],
  },
  {
    name: "Artemis",
    rankLevel: 2,
    expPoints: 150,
    bio: "Guerreira das Estrelas",
    enemiesDestroyed: 10,
    totalScore: 500,
    highestScore: 300,
    coinsCollected: 50,
    avatarIndex: 2,
    colorIndex: 2,
    userId: 2,
    saveDatas: [],
  },
  {
    name: "Hermes",
    rankLevel: 3,
    expPoints: 300,
    bio: "Guardião dos Ventos",
    enemiesDestroyed: 20,
    totalScore: 750,
    highestScore: 450,
    coinsCollected: 100,
    avatarIndex: 3,
    colorIndex: 3,
    userId: 3,
    saveDatas: [],
  },
  {
    name: "Patrícia Abravanel",
    rankLevel: 4,
    expPoints: 450,
    bio: "Senhora da Noite",
    enemiesDestroyed: 30,
    totalScore: 1000,
    highestScore: 600,
    coinsCollected: 150,
    avatarIndex: 4,
    colorIndex: 4,
    userId: 4,
    saveDatas: [],
  },
];
playerDatabase.push();
