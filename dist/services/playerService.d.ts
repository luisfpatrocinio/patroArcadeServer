import { Player } from "../models/playerDatabase";
import { PlayerGameData } from "../models/saveData";
import { User } from "../models/userModel";
export declare const getPlayerByName: (name: string) => Player | undefined;
export declare function generateNewPlayer(playerName: string): Partial<Player>;
export declare function addPlayerToDatabase(playerData: Partial<Player>): void;
export declare function getPlayerByUserId(userId: number): Player;
export declare function obtainPlayerSaves(playerId: number): Array<PlayerGameData>;
export declare function createPlayerForUser(user: Partial<User>): void;
export declare const updatePlayerTotalScore: (playerId: number) => Player;