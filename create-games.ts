import { Game, Player, FactionEnum } from "./sidcon-types";
import * as GAMES from './GAMES'




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

export function createGameArray(): Game[] {
    var games = [
        ...GAMES.GAMES,
    ]

    console.log("games", games.length);


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