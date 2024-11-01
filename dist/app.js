"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectedPlayerId = exports.disconnectPlayer = exports.connectPlayer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const playerRoutes_1 = require("./routes/playerRoutes");
const rateLimit_1 = require("./middleware/rateLimit");
const leaderboardRoutes_1 = require("./routes/leaderboardRoutes");
const scoreRoutes_1 = require("./routes/scoreRoutes");
const loginRoutes_1 = require("./routes/loginRoutes");
const logoutRoutes_1 = require("./routes/logoutRoutes");
const main_1 = require("./main");
// Criar a instância do Express
const app = (0, express_1.default)();
// Middleware de limitação de requisições
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(rateLimit_1.limiter);
// Configurar rotas
app.use("/player", playerRoutes_1.playerRoutes);
app.use("/leaderboard", leaderboardRoutes_1.leaderboardRoutes);
app.use("/score", scoreRoutes_1.scoreRoutes);
app.use("/login", loginRoutes_1.loginRoutes);
app.use("/logout", logoutRoutes_1.logoutRoutes);
// TODO: Configurar sessões
//
let connectedPlayerId = null; // Para armazenar o ID do jogador conectado.
// Função para conectar o jogador
function connectPlayer(playerId) {
    if (connectedPlayerId === null) {
        connectedPlayerId = playerId;
        console.log(`> CONNECTED: ${playerId}`);
        return true;
    }
    return false; // Se já houver um jogador conectado, não permite a conexão
}
exports.connectPlayer = connectPlayer;
// Função para desconectar o jogador
function disconnectPlayer(playerId) {
    if (connectedPlayerId === playerId) {
        console.log(`> DISCONNECTED: ${playerId}`);
        main_1.wss.clients.forEach((client) => {
            //   client.send(
            //     JSON.stringify({
            //       type: "playerLeft",
            //       content: `O jogador ${playerId} foi desconectado.`,
            //     })
            //   );
        });
        connectedPlayerId = null;
    }
    else {
        throw new Error("O jogador não está conectado.");
    }
}
exports.disconnectPlayer = disconnectPlayer;
function getConnectedPlayerId() {
    return connectedPlayerId;
}
exports.getConnectedPlayerId = getConnectedPlayerId;
// Definir rota inicial:
app.get("/", (req, res) => {
    console.log("Rota inicial acessada");
    res.json({
        type: "connected",
        content: "Bem-vindo ao servidor.",
    });
});
exports.default = app;
