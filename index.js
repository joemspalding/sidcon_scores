"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_games_1 = require("./create-games");
var sidcon_types_1 = require("./sidcon-types");
var GAMES = (0, create_games_1.createGameArray)();
var factionAverages = [];
// for (var faction in FactionEnum) {
//     if (!+faction) continue;
//     var factionId = +faction
//     if (factionId > 18) break;
//     var diff =  GAMES.reduce((totalDiff, game) => {
//         var hasVorgFactions = game.players.map(p => p.faction >= 18).reduce((t,c) => {
//             if (!c) return false;
//             if (!t) return false;
//             return true
//         })
//         if (hasVorgFactions) return;
//         let avgDiff = game.players
//             .filter(p => p.faction === factionId)
//             .filter(p => p.isRegular)
//             .reduce((t, _p) => t+_p.scoreDiff, 0 );
//         console.log("avgDiff", avgDiff);
//         return totalDiff + avgDiff
//     }, 0)/GAMES.length
//     // console.log(`Faction: ${FactionEnum[factionId]}, Diff: ${diff}\n`)
//     factionAverages.push( {
//         faction : FactionEnum[factionId],
//         diff: diff
//     })
// }
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
    console.log("fac", factionId);
    console.log("fac", sidcon_types_1.FactionEnum[factionId]);
    var diff = GAMES.reduce(function (totalDiff, game) {
        // remove homebrew factions
        var hasHomeBrewFactions = hasVorgFactions(game);
        if (hasHomeBrewFactions)
            return totalDiff;
        // // filter by date
        // var startingAtDate: Date = new Date('9/30/2023');
        // if (game.date < startingAtDate) return totalDiff;
        // does game have faction?
        var hasFaction = game.players.map(function (p) { return p.faction; }).includes(factionId);
        if (!hasFaction)
            return totalDiff;
        // get score diff by faction. throw out new player scores
        var avgDiff = game.players
            .filter(function (p) { return p.faction === factionId; })
            .filter(function (p) { return p.isRegular; })
            .map(function (p) {
            gameCounter++;
            scoreDiffs.push(p.scoreDiff);
            return p;
        })
            .reduce(function (t, _p) { return t + _p.scoreDiff; }, 0);
        return totalDiff + avgDiff;
    }, 0) / gameCounter;
    var standardDeviation = scoreDiffs.map(function (sd) { return Math.pow((sd - diff), 2); }).reduce(function (t, c) { return t + c; }, 0) / gameCounter;
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
