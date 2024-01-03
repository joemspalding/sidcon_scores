"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameArray = void 0;
var GAMES = require("./GAMES");
/* Omitting the DNF on 10/17/2023 */
/* Omitting the busted playtest of KitVorg on 10/15/2023 */
/* Omitting DNF on 10/14/2023 */
/* Omitting DNF on 09/30/2023 */
/* Omitting 08/07/2023 (iggy defaulted) */
/* Omitting DNF on 07/08/2023 */
/* Omitting DNF on 07/04/2023 */
/* Omitting DNF on 06/02/2023 */
/* Omitting DNF on 06/01/2023 */
/* Omitting DNF on 05/08/2023 */
/* Omitting DNF on 04/09/2023 */
function createGameArray() {
    var games = __spreadArray([], GAMES.GAMES, true);
    console.log("games", games.length);
    return games.map(function (game, index) {
        game.id = index;
        game.totalScore = game.players.reduce(function (a, b) { return a + b.score; }, 0);
        game.averageScore = game.totalScore / game.players.length;
        game.players = game.players.map(function (player) {
            player.scoreDiff = (player.score - game.averageScore) / game.players.length;
            return player;
        });
        return game;
    });
}
exports.createGameArray = createGameArray;
