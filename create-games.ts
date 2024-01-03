import { Game, Player, FactionEnum } from "./sidcon-types";
import * as GAMES from './GAMES'

import * as players from './players'


export function createGameArray(): Game[] {
    var games = [
        ...GAMES.GAMES,
    ]

    // do some calculations (average score, score diff) before passing to `index.ts`
    return games.map((game, index) => {
        game.id = index
        game.totalScore = game.players.reduce((a,b) => a+b.score, 0)
        game.averageScore = game.totalScore/game.players.length

        game.players = game.players.map(player => {
            player.scoreDiff = (player.score - game.averageScore)/game.players.length

            return player 
        })
        return game
    });
}   