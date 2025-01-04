"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameLeaderboardRequest = void 0;
const saveData_1 = require("../models/saveData");
const scoreService_1 = require("../services/scoreService");
function getGameLeaderboardRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const gameId = Number(req.params.gameId);
            console.log(`[getGameLeaderboardRequest] gameId: ${gameId}`);
            // Fail fast: se o gameId não for um número, retornar erro 400.
            if (isNaN(gameId)) {
                return res.status(400).json({ error: "Invalid gameId parameter" });
            }
            // Filtrar os dados do jogo correto.
            const gameSaves = saveData_1.saveDatabase.filter((save) => save.gameId === gameId);
            // Caso não haja dados para o gameId, retornar erro 404.
            if (gameSaves.length === 0) {
                return res.status(404).json({ message: "No data found for this gameId" });
            }
            // Ordenar por score.
            gameSaves.sort((a, b) => b.data.highestScore - a.data.highestScore);
            // Mapear para retornar apenas playerName e highestScore.
            const leaderboard = gameSaves.map((save) => {
                // Para cada save, obter o nome do jogador.
                const playerData = (0, scoreService_1.getPlayerDataById)(save.playerId);
                return {
                    playerName: playerData ? playerData.name : "Desconhecido",
                    highestScore: save.data.highestScore,
                };
            });
            // Retornar os 10 primeiros.
            res.status(200).json(leaderboard.slice(0, 10));
        }
        catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
exports.getGameLeaderboardRequest = getGameLeaderboardRequest;
