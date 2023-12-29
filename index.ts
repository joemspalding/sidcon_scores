import { createGameArray } from "./create-games";
import { FactionEnum, Player, Game } from "./sidcon-types";

const GAMES: Game[] = createGameArray();

let factionAverages: {faction: string, plays: number, diff: number, sd:number}[] = []
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

let gameCounter = 0;
let scoreDiffs: number[]  = [];
let diffSum = 0;
var hasVorgFactions = (game: Game) => {
    let arr = game.players.map(p => p.faction).map(f => f>= FactionEnum.KitVorg)
    return arr.includes(true);
}
let NONVORGGAMES = GAMES.filter(g => !hasVorgFactions(g))

for (var faction in FactionEnum) {
    
    if (!+faction) continue;
    var factionId = +faction
    // only WizKids Factions allowed
    if (factionId >= FactionEnum.KitVorg) break;

    console.log("fac",factionId);
    console.log("fac", FactionEnum[factionId]);
    var diff = GAMES.reduce((totalDiff, game) => {
        // remove homebrew factions
        var hasHomeBrewFactions = hasVorgFactions(game);
        if (hasHomeBrewFactions) return totalDiff;

        // // filter by date
        // var startingAtDate: Date = new Date('9/30/2023');
        // if (game.date < startingAtDate) return totalDiff;


        // does game have faction?
        var hasFaction = game.players.map(p => p.faction).includes(factionId)
        if (!hasFaction) return totalDiff

        // get score diff by faction. throw out new player scores
        let avgDiff = game.players
            .filter(p => p.faction === factionId)
            .filter(p => p.isRegular)
            .map(p => {
                gameCounter++;
                scoreDiffs.push(p.scoreDiff);
                return p;
            })
            .reduce((t, _p) => t + _p.scoreDiff, 0);

        return totalDiff + avgDiff
    }, 0)/gameCounter

    let standardDeviation = scoreDiffs.map(sd => (sd - diff) ** 2).reduce ((t, c) => t+c, 0)/gameCounter;
    console.log("standardDeviation", standardDeviation);
    factionAverages.push( {
        faction : FactionEnum[factionId],
        plays: gameCounter,
        diff: diff,
        sd: standardDeviation
    })
    
    gameCounter = 0;
    scoreDiffs = [];
}

factionAverages
.sort((a, b) =>  {
    if (isNaN(a.diff)) return 1000
    if (isNaN(b.diff)) return -1000
    return b.diff - a.diff
})
.forEach(f => {
    console.log(`${f.faction}, ${f.plays}, ${f.diff}, ${f.sd}`)
})

console.log("games",GAMES.length);
console.log("games",NONVORGGAMES.length);