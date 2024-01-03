"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_games_1 = require("./create-games");
var sidcon_types_1 = require("./sidcon-types");
var GAMES = (0, create_games_1.createGameArray)();
console.log("GAMES", GAMES.length);
var factionAverages = [];
var gameCounter = 0;
var scoreDiffs = [];
var diffSum = 0;
var hasVorgFactions = function (game) {
    var arr = game.players.map(function (p) { return p.faction; }).map(function (f) { return f >= sidcon_types_1.FactionEnum.KitVorg; });
    return arr.includes(true);
};
var NONVORGGAMES = GAMES.filter(function (g) { return !hasVorgFactions(g); });
for (var faction in sidcon_types_1.FactionEnum) {
    if (!+faction)
        continue;
    var factionId = +faction;
    // only WizKids Factions allowed
    if (factionId >= sidcon_types_1.FactionEnum.KitVorg)
        break;
    var diff = GAMES.reduce(function (totalDiff, game) {
        // remove homebrew factions
        var hasHomeBrewFactions = hasVorgFactions(game);
        if (hasHomeBrewFactions)
            return totalDiff;
        // // filter by date
        // var startingAtDate: Date = new Date('9/30/2023');
        // if (game.date < startingAtDate) return totalDiff;
        // // filter by player count
        // const PLAYERCOUNT = 4
        // if ((game.players.length < PLAYERCOUNT || game.players.length > PLAYERCOUNT)) return totalDiff;
        // does game have faction?
        var hasFaction = game.players.map(function (p) { return p.faction; }).includes(factionId);
        if (!hasFaction)
            return totalDiff;
        // get score diff by faction. throw out new player scores
        var avgDiff = game.players
            .filter(function (p) {
            var evaluation = p.faction === factionId;
            // console.log("evaluation", evaluation);
            return evaluation;
        })
            .filter(function (p) {
            // console.log("p", p);
            // console.log("p.isRegular", p.isRegular);
            return p.isRegular;
        })
            .map(function (p) {
            gameCounter++;
            scoreDiffs.push(p.scoreDiff);
            // console.log("here", p);
            return p;
        })
            .reduce(function (t, _p) { return t + _p.scoreDiff; }, 0);
        return totalDiff + avgDiff;
    }, 0) / gameCounter;
    var standardDeviation = Math.pow((scoreDiffs
        .map(function (sd) {
        // console.log("\tdiff", sd)
        var dev = Math.pow((sd - diff), 2);
        // console.log("\tdev", dev)
        return dev;
    })
        .reduce(function (t, c) { return t + c; }, 0) / gameCounter), .5);
    console.log("standardDeviation", standardDeviation);
    factionAverages.push({
        faction: sidcon_types_1.FactionEnum[factionId],
        plays: gameCounter,
        diff: diff,
        sd: standardDeviation
    });
    gameCounter = 0;
    scoreDiffs = [];
}
factionAverages
    .sort(function (a, b) {
    if (isNaN(a.diff))
        return 1000;
    if (isNaN(b.diff))
        return -1000;
    return b.diff - a.diff;
})
    .forEach(function (f) {
    console.log("".concat(f.faction, ", ").concat(f.plays, ", ").concat(f.diff, ", ").concat(f.sd));
});
console.log("games", GAMES.length);
console.log("games", NONVORGGAMES.length);
