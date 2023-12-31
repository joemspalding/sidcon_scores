import { createGameArray } from "./create-games";
import { FactionEnum, Player, Game } from "./sidcon-types";

const GAMES: Game[] = createGameArray();

let isFaction = (f) => f === FactionEnum.KitCore || f === FactionEnum.KjasCore || f === FactionEnum.UnityAlt
let factionAverages: {faction: string, plays: number, diff: number, sd:number}[] = []

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

    var diff = GAMES.reduce((totalDiff, game) => {

        // do not count games with homebrew factions
        var hasHomeBrewFactions = hasVorgFactions(game);
        if (hasHomeBrewFactions) return totalDiff;

        // // filter games by date
        // var startingAtDate: Date = new Date('9/30/2023');
        // if (game.date < startingAtDate) return totalDiff;

        // // filter games by player count
        // const PLAYERCOUNT = 4
        // if ((game.players.length < PLAYERCOUNT || game.players.length > PLAYERCOUNT)) return totalDiff;
        
        // does the game have the faction
        var hasFaction = game.players.map(p => p.faction).includes(factionId)
        if (!hasFaction) return totalDiff

        // get score ...
        let avgDiff = game.players
            .filter(p => p.faction === factionId)   // ...by diff...
            .filter(p => p.isRegular)               // ...remove new player scores...
            .map(p => {                             // statistical admin stuff
                if (isFaction(p.faction)) {
                    if (Number.isNaN(p.scoreDiff)) {
                        console.log(`${game.date}: ${p.name} - ${FactionEnum[p.faction]} - ${p.scoreDiff}`, );
                    }
                }
                gameCounter++;
                scoreDiffs.push(p.scoreDiff);
                return p;
            })
            .reduce((t, _p) => t + _p.scoreDiff, 0);
        return totalDiff + avgDiff
    }, 0)/gameCounter

    // calculate standard deviation
    let standardDeviation = (scoreDiffs
        .map(sd => {
            let dev = (sd - diff) ** 2
            return dev;
        })
        .reduce((t, c) => t + c, 0) / gameCounter) ** .5;

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
