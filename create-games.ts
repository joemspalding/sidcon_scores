import { Game, Player, FactionEnum } from "./sidcon-types";


const noname = <Player> {
    name: '',
    isRegular: false
}
// const dnf = <Player> {
//     ...noname,
//     faction: FactionEnum.DNF,
//     score: 0,
// }
const elz = <Player> {
    name: 'Elzarius',
    isRegular: true,
}
const rahm = <Player> {
    name: 'Rahm Emanuel',
    isRegular: true,
}
const caine = <Player> {
    name: 'Caine',
    isRegular: true,
}
const axxxvi = <Player> {
    name: 'axxxvi1235',
    isRegular: true,
}
const wumbo = <Player> {
    name: 'Wumbology Major',
    isRegular: true,
}
const vorg = <Player> {
    name: 'Vorglich',
    isRegular: true,
}
const boloney = <Player> {
    name: 'boloney',
    isRegular: false,
}
const grim = <Player> {
    name: 'The Grim Heaper',
    isRegular: true,
}
const iggy = <Player> {
    name: 'Igmatus',
    isRegular: true,
}
const prosperity = <Player> {
    name: 'Prosperity',
    isRegular: true,
} 
const markus = <Player> {
    name: 'markus',
    isRegular: true,
}
const zisos = <Player> {
    name: 'zisos78',
    isRegular: true,
}
const hingle = <Player> {
    name: 'Hingle McCringleberry',
    isRegular: true,
}
const toron = <Player> {
    name: 'Toron',
    isRegular: true,
}
const jeff = <Player> {
    name: 'Jeff',
    isRegular: true,
}
const luigi = <Player> {
    name: 'Luiginico',
    isRegular: true,
} 
const starfire = <Player> {
    name: 'Starfire',
    isRegular: true,
} 
const toan = <Player> {
    name: 'Toan()',
    isRegular: false
}
const hawk = <Player> {
    name: 'hawk',
    isRegular: false,
}
const phoenix = <Player> {
    name: 'phoenix',
    isRegular: false,
}
const queen = <Player> {
    name: 'queen chasitity',
    isRegular: false,
}
const glass = <Player> {
    name: 'castle of glass',
    isRegular: false,
}
const lastargument = <Player> {
    name: 'lastArgument',
    isRegular: false,
}
const abdla = <Player> {
    name: 'abdla',
    isRegular: false,
}
const geo = <Player> {
    name: 'mrgeometry1234',
    isRegular: false,
}
const leyfae = <Player> {
    name: 'Leyfae',
    isRegular: false,
} 
const sanguinius = <Player> {
    name: 'sanguinius13',
    isRegular: false,
} 
const brickman = <Player> {
    name: 'The Last Brickman',
    isRegular: false,
} 
const notmiefault = <Player> {
    name: 'Notmiefault'
} 
const shakespear = <Player> {
    name: 'Shakespear',
    isRegular: false,
} 
const pmv = <Player> {
    name: '[PMV]RD',
    isRegular: false,
}
const gust = <Player> {
    name: 'GUST',
    isRegular: false,
} 
const echo = <Player> {
    name: 'echomancer',
    isRegular: false,
} 
const herby = <Player> {
    name: 'Herby Moreau',
    isRegular: false,
} 
const hanaryoba = <Player> {
    name: 'HanaRyoba',
    isRegular: false,
}
const romulus = <Player> {
    name: '|TNUT| Romulus',
    isRegular: false,
} 
const boy = <Player> {
    name: 'Boy_314',
    isRegular: false,
} 
const blep  = <Player> {
    name: 'blep time',
    isRegular: false
}



/* Omitting the DNF on 10/17/2023 */
/* Omitting the busted playtest of KitVorg on 10/15/2023 */
/* Omitting DNF on 10/14/2023 */
/* Omitting DNF on 09/30/2023 */
/* Omitting 08/07/2023 (iggy defaulted) */
/* Omitting DNF on 07/08/2023 */
/* Omitting DNF on 07/04/2023 */
/* Omitting DNF on 06/02/2023 */
/* Omitting DNF on 06/01/2023 */

export function createGameArray(): Game[] {
    var games = [

        // last boloney game
        <Game> {
            date: new Date('12/28/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 106 + (8/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasCore,
                    score: 80 + (4/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 72 + (8/12)
                },
                {
                    ...luigi,
                    faction: FactionEnum.YengiiAlt,
                    score: 70 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilVorg,
                    score: 68 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/27/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 88 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KjasAlt,
                    score: 82 + (3/12)
                },
                {
                    ...leyfae,
                    faction: FactionEnum.KitCore,
                    score: 77 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtCore,
                    score: 68 + (9/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ImDrilAlt,
                    score: 50 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/27/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 74 + (4/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.YengiiCore,
                    score: 72 + (5/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 70 + (5/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 65 + (10/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/27/2023'),
            players:[
                {
                    ...luigi,
                    faction: FactionEnum.FaderanAlt,
                    score: 75 + (10/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 68 + (5/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 68 + (0/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiVorg,
                    score: 60 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/24/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.UnityAlt,
                    score: 66 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ZethAlt,
                    score: 61 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 60 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitCore,
                    score: 57 + (5/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.EniEtCore,
                    score: 49 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/20/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KitAlt,
                    score: 76 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ImDrilAlt,
                    score: 71 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 64 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.UnityAlt,
                    score: 60 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/19/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 62 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 59 + (4/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasCore,
                    score: 58 + (9/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.EniEtCore,
                    score: 49 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/19/2023'),
            players:[
                {
                    ...boloney,
                    faction: FactionEnum.FaderanCore,
                    score: 59 + (7/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.YengiiCore,
                    score: 63 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (0/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 57 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/17/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.YengiiAlt,
                    score: 72 + (1/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.EniEtAlt,
                    score: 74 + (4/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 69 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasCore,
                    score: 55 + (5/12)
                },
                {
                    ...sanguinius,
                    faction: FactionEnum.KitCore,
                    score: 51 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/16/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanVorg,
                    score: 87 + (1/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilAlt,
                    score: 84 + (11/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitVorg,
                    score: 83 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiCore,
                    score: 72 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 72 + (5/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasVorg,
                    score: 61 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/14/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 79 + (8/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.ImDrilCore,
                    score: 64 + (5/12)
                },
                {
                    ...leyfae,
                    faction: FactionEnum.FaderanCore,
                    score: 63 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ZethAlt,
                    score: 58 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/13/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 70 + (7/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.FaderanCore,
                    score: 66 + (1/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 63 + (9/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasCore,
                    score: 53 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/12/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.FaderanCore,
                    score: 78 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 65 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 64 + (3/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilAlt,
                    score: 62 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/08/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.FaderanVorg,
                    score: 112 + (4/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KjasAlt,
                    score: 106 + (9/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionVorg,
                    score: 105 + (8/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.ZethAlt,
                    score: 95 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 95 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 88 + (1/12)
                },

            ]
        },
        <Game> {
            date: new Date('12/08/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 74 + (2/12)
                },
                {
                    ...leyfae,
                    faction: FactionEnum.KitCore,
                    score: 67 + (1/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 63 + (2/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.KjasCore,
                    score: 48 + (8/12)
                },
                
            ]
        },
        <Game> {
            date: new Date('12/05/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanVorg,
                    score: 69 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtVorg,
                    score: 61 + (1/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 60 + (7/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 54 + (7/12)
                },
                
            ]
        },
        <Game> {
            date: new Date('12/04/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 97 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasAlt,
                    score: 86 + (7/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitAlt,
                    score: 85 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.EniEtCore,
                    score: 80 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 80 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/04/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 101 + (8/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 94 + (6/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.UnityAlt,
                    score: 91 + (0/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.ImDrilAlt,
                    score: 83 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 75 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/03/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 132 + (7/12)
                },
                {
                    ...prosperity,
                    faction: FactionEnum.CaylionAlt,
                    score: 123 + (2/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ZethAlt,
                    score: 120 + (11/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 116 + (4/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 111 + (7/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 102 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitAlt,
                    score: 96 + (7/12)
                },

            ]
        },
        <Game> {
            date: new Date('12/02/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 79 + (1/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasAlt,
                    score: 78 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.ZethAlt,
                    score: 70 + (3/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionCore,
                    score: 62 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('12/01/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 68 + (5/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityAlt,
                    score: 61 + (11/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 61 + (6/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.EniEtCore,
                    score: 51 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/27/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilAlt,
                    score: 88 + (5/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.CaylionCore,
                    score: 87 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 76 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 74 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiCore,
                    score: 66 + (9/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.EniEtCore,
                    score: 61 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/27/2023'),
            players: [
                {
                    ...jeff,
                    faction: FactionEnum.EniEtCore,
                    score: 85 + (7/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 68 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (7/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ImDrilAlt,
                    score: 47 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/27/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 76 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 65 + (2/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 63 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.UnityAlt,
                    score: 51 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/24/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 69 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 67 + (7/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 59 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 52 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/22/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 74 + (1/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 73 + (9/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 72 + (8/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ZethAlt,
                    score: 64 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/16/2023'),
            players: [
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 77 + (10/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 70 + (6/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.FaderanCore,
                    score: 68 + (10/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 67 + (0/12)
                },

            ]
        },
        <Game> {
            date: new Date('11/13/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.ZethAlt,
                    score: 87 + (11/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.KjasCore,
                    score: 82 + (9/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiAlt,
                    score: 82 + (1/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionAlt,
                    score: 80 + (5/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 76 + (6/12)
                },

            ]
        },
        <Game> {
            date: new Date('11/12/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.ZethAlt,
                    score: 94 + (11/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 89 + (1/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.ImDrilCore,
                    score: 75 + (5/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanAlt,
                    score: 73 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.UnityAlt,
                    score: 73 + (5/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.KjasAlt,
                    score: 72 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/12/2023'),
            players: [
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 67 + (1/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ImDrilCore,
                    score: 67 + (1/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.FaderanCore,
                    score: 63 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 61 + (3/12)
                },
                {
                    ...geo,
                    faction: FactionEnum.CaylionCore,
                    score: 39 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/11/2023'),
            players:[
                {
                    ...hawk,
                    faction: FactionEnum.ZethAlt,
                    score: 69 + (8/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 66 + (10/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 66 + (9/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 55 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/11/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 80 + (7/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.CaylionCore,
                    score: 75 + (7/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiAlt,
                    score: 71 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 65 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/10/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitCore,
                    score: 66 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 61 + (4/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ImDrilCore,
                    score: 47 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/09/2023'),
            players: [
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 72 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (10/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.YengiiCore,
                    score: 54 + (0/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ZethAlt,
                    score: 49 + (2/12)
                },

            ]
        },
        <Game> {
            date: new Date('11/09/2023'),
            players: [
                {
                    ...hingle,
                    faction: FactionEnum.KjasAlt,
                    score: 77 + (10/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 72 + (0/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.UnityAlt,
                    score: 70 + (8/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.FaderanCore,
                    score: 55 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/08/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.FaderanCore,
                    score: 89 + (3/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 77 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 75 + (0/12)
                },
                {
                    ...brickman,
                    faction: FactionEnum.KjasCore,
                    score: 45 + (6/12)
                },
                {
                    ...noname, //grim
                    faction: FactionEnum.KitAlt,
                    score: 77 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/08/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.KitVorg,
                    score: 87 + (9/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.FaderanVorg,
                    score: 86 + (6/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 86 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasAlt,
                    score: 64 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtVorg,
                    score: 61 + (0/12)
                },

            ]
        },
        <Game> {
            date: new Date('11/06/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.YengiiVorg,
                    score: 86 + (5/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitVorg,
                    score: 83 + (11/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.ZethAlt,
                    score: 70 + (1/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasVorg,
                    score: 68 + (5/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.FaderanVorg,
                    score: 46 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/05/2023'),
            players: [
                {
                    ...boloney,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 66 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethAlt,
                    score: 64 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitVorg,
                    score: 62 + (2/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.FaderanVorg,
                    score: 57 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiVorg,
                    score: 55 + (11/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.ImDrilCore,
                    score: 53 + (2/12)
                },

            ]
        },
        <Game> {
            date: new Date('11/05/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 66 + (1/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 58 + (0/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 57 + (11/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 47 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/04/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 76 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 63 + (0/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.UnityAlt,
                    score: 52 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasCore,
                    score: 50 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/04/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanVorg,
                    score: 147 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitVorg,
                    score: 99 + (11/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 97 + (9/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 78 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiVorg,
                    score: 71 + (5/12)
                },
                {
                    ...notmiefault,
                    faction: FactionEnum.KjasCore,
                    score: 63 + (4/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.ZethAlt,
                    score: 58 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/04/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.EniEtCore,
                    score: 67 + (6/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 66 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasCore,
                    score: 53 + (10/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 51 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/02/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.ZethAlt,
                    score: 114 + (3/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.YengiiCore,
                    score: 111 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.FaderanCore,
                    score: 106 + (7/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 100 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 93 + (9/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionAlt,
                    score: 92 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/02/2023'),
            players: [
                {
                    ...elz,
                    faction: FactionEnum.YengiiVorg,
                    score: 99 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.FaderanVorg,
                    score: 82 + (5/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitVorg,
                    score: 76 + (1/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ImDrilAlt,
                    score: 68 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 51 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('11/01/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.KitVorg,
                    score: 74 + (9/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 62 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.FaderanVorg,
                    score: 61 + (7/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.CaylionCore,
                    score: 42 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/31/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.ImDrilAlt,
                    score: 67 + (7/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitVorg,
                    score: 65 + (6/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.KjasVorg,
                    score: 56 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 55 + (4/12)
                },

            ]
        },
        <Game> {
            date: new Date('10/30/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.EniEtAlt,
                    score: 96 + (5/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 82 + (4/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasCore,
                    score: 81 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 75 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.UnityAlt,
                    score: 72 + (8/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.KitCore,
                    score: 65 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/29/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 69 + (10/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ZethAlt,
                    score: 67 + (10/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (6/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasCore,
                    score: 62 + (4/12)
                },

            ]
        },
        <Game> {
            date: new Date('10/28/2023'),
            players: [
                {
                    ...elz,
                    faction: FactionEnum.KjasAlt,
                    score: 94 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 93 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.FaderanAlt,
                    score: 81 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 72 + (1/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.ImDrilAlt,
                    score: 69 + (10/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.UnityAlt,
                    score: 49 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/28/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 57 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 56 + (10/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.EniEtCore,
                    score: 55 + (2/12)
                },
                {
                    ...hawk,
                    faction: FactionEnum.YengiiAlt,
                    score: 33 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/27/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitCore,
                    score: 95 + (2/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KjasAlt,
                    score: 88 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.YengiiCore,
                    score: 85 + (3/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.EniEtAlt,
                    score: 82 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 80 + (3/12)
                },
                {
                    ...lastargument,
                    faction: FactionEnum.ImDrilCore,
                    score: 62 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/26/2023'),
            players: [
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 98 + (9/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 97 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 94 + (7/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ZethAlt,
                    score: 88 + (5/12)
                },
                {
                    ...lastargument,
                    faction: FactionEnum.UnityCore,
                    score: 80 + (0/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ImDrilAlt,
                    score: 69 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/26/2023'),
            players: [
                {
                    ...jeff,
                    faction: FactionEnum.YengiiAlt,
                    score: 94 + (4/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.KjasCore,
                    score: 74 + (9/12)
                },
                {
                    ...abdla,
                    faction: FactionEnum.CaylionAlt,
                    score: 65 + (9/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 63 + (4/12)
                },

            ]
        },
        <Game> {
            date: new Date('10/26/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 75 + (5/12)
                },
                {
                    ...lastargument,
                    faction: FactionEnum.CaylionCore,
                    score: 56 + (7/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.YengiiCore,
                    score: 56 + (7/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.ImDrilCore,
                    score: 38 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/25/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 80 + (7/12)
                },
                {
                    ...lastargument,
                    faction: FactionEnum.EniEtAlt,
                    score: 75 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ImDrilCore,
                    score: 69 + (0/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.YengiiAlt,
                    score: 67 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 58 + (11/12)
                },
            ]

        },
        <Game> {
            date: new Date('10/22/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KjasAlt,
                    score: 87 + (4/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 82 + (9/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.EniEtAlt,
                    score: 72 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 70 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 65 + (3/12)
                },

            ]
        },
        <Game> {
            date: new Date('10/21/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.KjasAlt,
                    score: 75 + (8 / 12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 69 + (4 / 12)
                },
                {
                    ...toron,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (2 / 12)
                },
                {
                    ...glass,
                    faction: FactionEnum.FaderanAlt,
                    score: 62 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/21/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 77 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtCore,
                    score: 72 + (11/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilAlt,
                    score: 72 + (0/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.CaylionCore,
                    score: 60 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/20/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.FaderanCore,
                    score: 105 + (3/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilVorg,
                    score: 96 + (11/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.KitCore,
                    score: 92 + (8/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 89 + (1/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.CaylionAlt,
                    score: 75 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/21/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilVorg,
                    score: 64 + (3/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (2/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.FaderanCore,
                    score: 59 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitCore,
                    score: 58 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/19/2023'),
            players: [
                {
                    ...elz,
                    faction: FactionEnum.YengiiVorg,
                    score: 79 + (6/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.EniEtCore,
                    score: 67 + (0/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 48 + (1/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ImDrilAlt,
                    score: 37 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/19/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KjasCore,
                    score: 73 + (7/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 67 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 58 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilAlt,
                    score: 54 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/18/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.UnityAlt,
                    score: 69 + (7/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasCore,
                    score: 65 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 59 + (0/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.EniEtAlt,
                    score: 34 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/18/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 69 + (0/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.ZethAlt,
                    score: 65 + (1/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasCore,
                    score: 55 + (10/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.UnityAlt,
                    score: 35 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/15/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 94 + (8/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 77 + (7/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 76 + (10/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 74 + (5/12)
                },
                {
                    ...glass,
                    faction: FactionEnum.FaderanCore,
                    score: 66 + (9/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/13/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 89 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiAlt,
                    score: 86 + (11/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitAlt,
                    score: 85 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ImDrilAlt,
                    score: 72 + (3/12)
                },
                {
                    ...lastargument,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/12/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 82 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiAlt,
                    score: 79 + (9/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 73 + (9/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 62 + (0/12)
                },

            ]
        },
        <Game> {
            date: new Date('10/09/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiVorg,
                    score: 96 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionVorg,
                    score: 87 + (8/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasAlt,
                    score: 85 + (10/12)
                },
                {
                    ...prosperity,
                    faction: FactionEnum.EniEtCore,
                    score: 85 + (1/12)
                },
                {
                    ...shakespear,
                    faction: FactionEnum.KitCore,
                    score: 74 + (8/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 66 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/08/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 82 + (1/12)
                },
                {
                ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 73 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.EniEtCore,
                    score: 65 + (7/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (1/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 63 + (9/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/07/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 84 + (4/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionVorg,
                    score: 80 + (6/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitAlt,
                    score: 75 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 75 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/06/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 86 + (3/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 79 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 67 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionVorg,
                    score: 66 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/06/2023'),
            players:[
                {
                    ...vorg,
                    faction: FactionEnum.FaderanCore,
                    score: 76 + (7/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.KitCore,
                    score: 68 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasAlt,
                    score: 59 + (5/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 52 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/03/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.EniEtCore,
                    score: 84 + (11/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 84 + (11/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.YengiiCore,
                    score: 75 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionAlt,
                    score: 71 + (9/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethCore,
                    score: 69 + (0/12)
                },
                {
                    ...pmv,
                    faction: FactionEnum.ImDrilCore,
                    score: 44 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('10/01/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 72 + (5/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiCore,
                    score: 68 + (9/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 66 + (6/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtCore,
                    score: 63 + (0/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasCore,
                    score: 48 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('9/29/2023'),
            players: [
                {
                    ...toron,
                    faction: FactionEnum.EniEtAlt,
                    score: 66 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ImDrilCore,
                    score: 63 + (0/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.FaderanAlt,
                    score: 44 + (0/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 34 + (9/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/29/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.ZethAlt,
                    score: 94 + (8/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 86 + (6/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 81 + (10/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 73 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasAlt,
                    score: 72 + (5/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.ImDrilCore,
                    score: 64 + (0/12)
                },

            ]
        },
        <Game> {
            date: new Date('09/28/2023'),
            players:[
                {
                    ...vorg,
                    faction: FactionEnum.KitAlt,
                    score: 75 + (3/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasCore,
                    score: 72 + (4/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.CaylionCore,
                    score: 68 + (11/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ImDrilCore,
                    score: 62 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/26/2023'),
            players:[
                {
                    ...prosperity,
                    faction: FactionEnum.ZethAlt,
                    score: 96 + (5/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 95 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.EniEtAlt,
                    score: 91 + (10/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 90 + (0/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 89 + (11/12)
                },
                {
                    ...gust,
                    faction: FactionEnum.CaylionAlt,
                    score: 75 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/26/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.KjasAlt,
                    score: 70 + (2/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 63 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 61 + (3/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 51 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/24/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionAlt,
                    score: 86 + (11/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.ImDrilAlt,
                    score: 85 + (11/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.EniEtCore,
                    score: 82 + (3/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.FaderanCore,
                    score: 77 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitCore,
                    score: 73 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/24/2023'),
            players: [
                {
                    ...jeff,
                    faction: FactionEnum.CaylionCore,
                    score: 96 + (2/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ZethAlt,
                    score: 79 + (2/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiCore,
                    score: 78 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 78 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 72 + (6/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.KitCore,
                    score: 62 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/23/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 74 + (1/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KjasAlt,
                    score: 72 + (1/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.UnityAlt,
                    score: 57 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiCore,
                    score: 54 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/22/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 67 + (8/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.FaderanCore,
                    score: 64 + (8/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasCore,
                    score: 57 + (10/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 56 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/22/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.FaderanCore,
                    score: 83 + (5/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 83 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 81 + (11/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 76 + (6/12)
                },
                {
                    ...echo,
                    faction: FactionEnum.ZethAlt,
                    score: 71 + (7/12)
                },
                {
                    ...brickman,
                    faction: FactionEnum.KitCore,
                    score: 57 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/18/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 57 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 56 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.KitCore,
                    score: 56 + (0/12)
                },
                {
                    ...gust,
                    faction: FactionEnum.CaylionCore,
                    score: 54 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('9/19/2023'),
            players: [
                {
                    ...jeff,
                    faction: FactionEnum.UnityAlt,
                    score: 101 + (2/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiAlt,
                    score: 88 + (6/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.EniEtCore,
                    score: 83 + (2/12)
                },
                {
                    ...phoenix,
                    faction: FactionEnum.KjasCore,
                    score: 72 + (8/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.FaderanAlt,
                    score: 61 + (4/12)
                },          
            ]
        },
        <Game> {
            date: new Date('09/18/2023'),
            note: "Unity Alt was buffed",
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.EniEtAlt,
                    score: 76 + (10/12)
                },
                {
                    ...echo,
                    faction: FactionEnum.FaderanAlt,
                    score: 70 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityAlt,
                    score: 70 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 68 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/10/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.KjasCore,
                    score: 94 + (9/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiCore,
                    score: 86 + (1/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 84 + (3/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 82 + (7/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.EniEtAlt,
                    score: 73 + (0/12)
                },
                {
                    ...herby,
                    faction: FactionEnum.CaylionCore,
                    score: 56 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('9/11/2023'),
            players: [
                {
                    ...jeff,
                    faction: FactionEnum.EniEtAlt,
                    score: 91 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 64 + (10/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 60 + (10/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.KjasCore,
                    score: 45 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/09/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.KjasAlt,
                    score: 106 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 100 + (1/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionAlt,
                    score: 97 + (11/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.FaderanCore,
                    score: 92 + (0/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ZethAlt,
                    score: 85 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/09/2023'),
            players:[
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 69 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasAlt,
                    score: 64 + (0/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 57 + (7/12)
                },
                {
                    ...gust,
                    faction: FactionEnum.ImDrilCore,
                    score: 40 + (5/12)
                },

            ]
        },
        <Game> {
            date: new Date('09/09/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 78 + (2/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 70 + (3/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanAlt,
                    score: 66 + (7/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 46 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/03/2023'),
            players:[
                {
                    ...zisos,
                    faction: FactionEnum.FaderanCore,
                    score: 71 + (2/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasCore,
                    score: 63 + (3/12)
                },
                {
                    ...herby,
                    faction: FactionEnum.KitCore,
                    score: 57 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 46 + (6/12)
                },

            ]
        },
        <Game> {
            date: new Date('09/10/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.YengiiAlt,
                    score: 74 + (1/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasAlt,
                    score: 70 + (8/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtCore,
                    score: 65 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ZethAlt,
                    score: 56 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('09/01/2023'),
            players: [
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 82 + (0/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ImDrilCore,
                    score: 78 + (4/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.FaderanAlt,
                    score: 78 + (4/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.KitAlt,
                    score: 40 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/31/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.KjasAlt,
                    score: 92 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 82 + (3/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.FaderanCore,
                    score: 77 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ImDrilAlt,
                    score: 69 + (7/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethCore,
                    score: 68 + (10/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 68 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/27/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.FaderanCore,
                    score: 8/7 + (6/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.YengiiAlt,
                    score: 81 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 78 + (2/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 66 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('8/26/2023'),
            players: [
                {
                    ...hingle,
                    faction: FactionEnum.KjasAlt,
                    score: 82 + (6/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 77 + (11/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.EniEtAlt,
                    score: 68 + (4/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.FaderanCore,
                    score: 59 + (5/12)
                },

            ]
        },
        <Game> {
            date: new Date('08/25/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.EniEtCore,
                    score: 86 + (6/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.ImDrilAlt,
                    score: 81 + (6/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 77 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 74 + (0/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 54 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/24/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 54 + (6/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.ZethCore,
                    score: 53 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasCore,
                    score: 52 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 49 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/21/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 66 + (0/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 65 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasCore,
                    score: 65 + (9/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.ZethAlt,
                    score: 57 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/21/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.YengiiAlt,
                    score: 69 + (9/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.KitCore,
                    score: 59 + (0/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 58 + (3/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 47 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/18/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.FaderanAlt,
                    score: 80 + (9/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 80 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasAlt,
                    score: 75 + (7/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 73 + (10/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.UnityAlt,
                    score: 58 + (9/12)
                },

            ]
        },
        <Game> {
            date: new Date('08/18/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 87 + (2/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.YengiiCore,
                    score: 78 + (10/12)
                },
                {
                    ...caine,
                    faction: FactionEnum.ZethAlt,
                    score: 64 + (8/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KjasCore,
                    score: 44 + (11/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.UnityAlt,
                    score: 38 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/16/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 125 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiCore,
                    score: 112 + (11/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionAlt,
                    score: 104 + (7/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 97 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasAlt,
                    score: 94 + (1/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ImDrilAlt,
                    score: 86 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/15/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 72 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityAlt,
                    score: 67 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 64 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionCore,
                    score: 63 + (8/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.YengiiAlt,
                    score: 56 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/15/2023'),
            players:[
                {
                    ...axxxvi,
                    faction: FactionEnum.FaderanAlt,
                    score: 81 + (5/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 75 + (7/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilAlt,
                    score: 69 + (11/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 58 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('8/14/2023'),
            players: [
                {
                    ...axxxvi,
                    faction: FactionEnum.KitAlt,
                    score: 68 + (7/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 64 + (8/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 61 + (7/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.ZethAlt,
                    score: 43 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/14/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.CaylionCore,
                    score: 76 + (3/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.EniEtAlt,
                    score: 75 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 63 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 60 + (4/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.ImDrilCore,
                    score: 60 + (2/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethCore,
                    score: 50 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/13/2023'),
            players:[
                {
                    ...iggy,
                    faction: FactionEnum.FaderanCore,
                    score: 67 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 62 + (11/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.CaylionCore,
                    score: 53 + (1/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 50 + (1/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethCore,
                    score: 48 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/11/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 81 + (1/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasAlt,
                    score: 71 + (5/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.YengiiCore,
                    score: 68 + (11/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethAlt,
                    score: 55 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/10/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 77 + (2/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ImDrilCore,
                    score: 66 + (0/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KitCore,
                    score: 55 + (5/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.FaderanAlt,
                    score: 55 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethCore,
                    score: 51 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/09/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.KitCore,
                    score: 101 + (11/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtCore,
                    score: 98 + (3/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilAlt,
                    score: 91 + (7/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.UnityAlt,
                    score: 90 + (0/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.CaylionAlt,
                    score: 69 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/09/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 81 + (7/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethAlt,
                    score: 74 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 70 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 69 + (8/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 67 + (7/12)
                },
                {
                    ...hanaryoba,
                    faction: FactionEnum.FaderanCore,
                    score: 47 + (10/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/05/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.YengiiCore,
                    score: 57 + (9/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitAlt,
                    score: 53 + (8/12)
                },
                {
                    ...hanaryoba,
                    faction: FactionEnum.UnityAlt,
                    score: 46 + (10/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.FaderanCore,
                    score: 44 + (0/12)
                },
                {
                    ...romulus,
                    faction: FactionEnum.KjasCore,
                    score: 34 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/04/2023'),
            players: [
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 99 + (9/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.ImDrilAlt,
                    score: 98 + (9/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtCore,
                    score: 97 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KjasAlt,
                    score: 81 + (3/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ZethCore,
                    score: 62 + (2/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.CaylionCore,
                    score: 38 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/04/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilAlt,
                    score: 91 + (8/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiAlt,
                    score: 90 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 90 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 77 + (11/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.KjasAlt,
                    score: 65 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/03/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 95 + (8/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.ZethAlt,
                    score: 87 + (0/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 67 + (0/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 63 + (6/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.ImDrilAlt,
                    score: 45 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/03/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.EniEtAlt,
                    score: 61 + (78/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 61 + (4/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KjasCore,
                    score: 52 + (9/12)
                },
                {
                    ...queen,
                    faction: FactionEnum.UnityAlt,
                    score: 52 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('08/01/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.YengiiAlt,
                    score: 96 + (2/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 90 + (7/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 90 + (4/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.CaylionCore,
                    score: 75 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.FaderanAlt,
                    score: 65 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/27/2023'),
            players:[
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 69 + (4/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 68 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionCore,
                    score: 65 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 56 + (5/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KjasCore,
                    score: 54 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/25/2023'),
            players: [
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 98 + (7/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 95 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 79 + (1/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.YengiiAlt,
                    score: 76 + (2/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ZethAlt,
                    score: 52 + (3/12)
                },
                {
                    ...boloney,
                    faction: FactionEnum.UnityAlt,
                    score: 52 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/24/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KjasCore,
                    score: 72 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 69 + (5/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.EniEtAlt,
                    score: 68 + (11/12)
                },
                {
                    ...caine,
                    faction: FactionEnum.KitCore,
                    score: 65 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 63 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/23/2023'),
            players:[
                {
                    ...toan,
                    faction: FactionEnum.CaylionCore,
                    score: 73 + (4/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.FaderanCore,
                    score: 66 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ZethCore,
                    score: 65 + (9/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 62 + (6/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitAlt,
                    score: 59 + (5/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/19/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 92 + (7/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.KitCore,
                    score: 91 + (6/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 82 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 80 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiCore,
                    score: 78 + (8/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ZethAlt,
                    score: 73 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/18/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 62 + (11/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.FaderanCore,
                    score: 60 + (0/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 57 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.UnityAlt,
                    score: 51 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/16/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtAlt,
                    score: 70 + (3/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 57 + (8/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasCore,
                    score: 57 + (3/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 56 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/15/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 73 + (3/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 72 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.FaderanAlt,
                    score: 63 + (9/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasCore,
                    score: 61 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 55 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/15/2023'),
            players:[
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 73 + (6/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KitCore,
                    score: 68 + (5/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 67 + (6/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 66 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KjasCore,
                    score: 64 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/15/2023'),
            players:[
                {
                    ...zisos,
                    faction: FactionEnum.ImDrilCore,
                    score: 49 + (11/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 48 + (8/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 47 + (7/12)
                },
                {
                    ...boy,
                    faction: FactionEnum.KjasCore,
                    score: 41 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/14/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.EniEtAlt,
                    score: 103 + (3/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitAlt,
                    score: 98 + (11/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 90 + (1/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.CaylionAlt,
                    score: 90 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 79 + (9/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/14/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 65 + (0/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.UnityCore,
                    score: 59 + (5/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.FaderanAlt,
                    score: 58 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.YengiiCore,
                    score: 46 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/13/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 65 + (4/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityAlt,
                    score: 60 + (7/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.ImDrilAlt,
                    score: 58 + (7/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 53 + (3/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/11/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KjasAlt,
                    score: 135 + (8/12)
                },
                {
                    ...prosperity,
                    faction: FactionEnum.EniEtAlt,
                    score: 134 + (8/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.CaylionAlt,
                    score: 109 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 104 + (5/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ZethAlt,
                    score: 101 + (9/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.FaderanAlt,
                    score: 87 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitAlt,
                    score: 79 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/11/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.YengiiCore,
                    score: 59 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionCore,
                    score: 54 + (5/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 53 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 44 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/09/2023'),
            players:[
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 69 + (0/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 67 + (9/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.ImDrilAlt,
                    score: 56 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 55 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/09/2023'),
            players:[
                {
                    ...markus,
                    faction: FactionEnum.YengiiAlt,
                    score: 71 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 68 + (10/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 67 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 57 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/08/2023'),
            players:[
                {
                    ...axxxvi,
                    faction: FactionEnum.EniEtAlt,
                    score: 83 + (1/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 81 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 75 + (1/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 63 + (10/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KitCore,
                    score: 54 + (3/12)
                },
                {
                    ...toan,
                    faction: FactionEnum.KjasCore,
                    score: 47 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/07/2023'),
            players:[
                {
                    ...markus,
                    faction: FactionEnum.EniEtAlt,
                    score: 75 + (7/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasCore,
                    score: 69 + (4/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 64 + (3/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.FaderanAlt,
                    score: 60 + (1/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.YengiiCore,
                    score: 46 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/06/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.YengiiCore,
                    score: 78 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ZethAlt,
                    score: 69 + (6/12)
                },
                {
                    ...zisos,
                    faction: FactionEnum.KitCore,
                    score: 63 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.CaylionCore,
                    score: 62 + (6/12)
                },
                {
                    ...toan,
                    faction: FactionEnum.EniEtCore,
                    score: 56 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/05/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilCore,
                    score: 62 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 61 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasCore,
                    score: 56 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/05/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 68 + (6/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilAlt,
                    score: 67 + (1/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.CaylionCore,
                    score: 64 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 41 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/03/2023'),
            players: [
                {
                    ...elz,
                    faction: FactionEnum.FaderanAlt,
                    score: 79 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 78 + (2/12),
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.YengiiCore,
                    score: 66 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.EniEtCore,
                    score: 66 + (4/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.KitCore,
                    score: 62
                },
                {
                    ...boloney,
                    faction: FactionEnum.KjasAlt,
                    score: 44 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/01/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.CaylionCore,
                    score: 85 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.EniEtAlt,
                    score: 83 + (1/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 75 + (10/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.ImDrilCore,
                    score: 70 + (8/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethAlt,
                    score: 56 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('07/01/2023'),
            players:[
                {
                    ...phoenix,
                    faction: FactionEnum.FaderanCore,
                    score: 66 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 66 + (4/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethAlt,
                    score: 65 + (10/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityAlt,
                    score: 60 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/30/2023'),
            players:[
                {
                    ...markus,
                    faction: FactionEnum.KitCore,
                    score: 80 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiAlt,
                    score: 78 + (8/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KjasAlt,
                    score: 77 + (10/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.EniEtAlt,
                    score: 76 + (2/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.CaylionCore,
                    score: 73 + (10/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityCore,
                    score: 49 + (0/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/29/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.ImDrilCore,
                    score: 83 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 77 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 75 + (3/12)
                },
                {
                    ...prosperity,
                    faction: FactionEnum.KjasAlt,
                    score: 72 + (0/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.CaylionCore,
                    score: 70 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/28/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.KitCore,
                    score: 85 + (2/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.CaylionCore,
                    score: 76 + (9/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.ZethAlt,
                    score: 73 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 68 + (7/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.YengiiAlt,
                    score: 56 + (4/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/27/2023'),
            players:[
                {
                    ...grim,
                    faction: FactionEnum.FaderanCore,
                    score: 70 + (7/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.KitAlt,
                    score: 88 + (10/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.EniEtAlt,
                    score: 72 + (4/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 65 + (11/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.CaylionCore,
                    score: 63 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/25/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 68 + (4/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.UnityCoreBuffs,
                    score: 64 + (5/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.EniEtCore,
                    score: 64 + (0/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 59 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitCore,
                    score: 55 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/23/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.CaylionAlt,
                    score: 109 + (4/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.EniEtAlt,
                    score: 106 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.YengiiCore,
                    score: 104 + (10/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ImDrilAlt,
                    score: 100 + (9/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 82 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasAlt,
                    score: 76 + (3/12)
                },
                {
                    ...vorg,
                    faction: FactionEnum.UnityAlt,
                    score: 74 + (1/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/21/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.KjasAlt,
                    score: 104 + (11/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.ImDrilAlt,
                    score: 102 + (6/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.YengiiCore,
                    score: 96 + (6/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.FaderanAlt,
                    score: 91 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 80 + (9/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.ZethAlt,
                    score: 80 + (7/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/18/2023'),
            players:[
                {
                    ...elz,
                    faction: FactionEnum.UnityAlt,
                    score: 68 + (4/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitAlt,
                    score: 64 + (1/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 62 + (9/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.KjasCore,
                    score: 62 + (8/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/14/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.CaylionAlt,
                    score: 88 + (11/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ZethAlt,
                    score: 88 + (5/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.FaderanAlt,
                    score: 84 + (8/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 82 + (5/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.UnityAlt,
                    score: 73 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/11/2023'),
            players:[
                {
                    ...hingle,
                    faction: FactionEnum.FaderanCore,
                    score: 92 + (11/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.EniEtAlt,
                    score: 89 + (9/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.YengiiAlt,
                    score: 88 + (9/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.KjasCore,
                    score: 82 + (3/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.KitCore,
                    score: 81 + (0/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.CaylionCore,
                    score: 77 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/08/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.YengiiAlt,
                    score: 91 + (4/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.ImDrilCore,
                    score: 79 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KitAlt,
                    score: 72 + (6/12)
                },
                {
                    ...starfire,
                    faction: FactionEnum.UnityAlt,
                    score: 71 + (5/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasCore,
                    score: 68 + (7/12)
                },
                {
                    ...blep,
                    faction: FactionEnum.FaderanAlt,
                    score: 45 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/07/2023'),
            players:[
                {
                    ...toron,
                    faction: FactionEnum.FaderanCore,
                    score: 116 + (11/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.ZethAlt,
                    score: 104 + (11/12)
                },
                {
                    ...elz,
                    faction: FactionEnum.ImDrilCore,
                    score: 102 + (11/12)
                },
                {
                    ...markus,
                    faction: FactionEnum.KjasAlt,
                    score: 102 + (3/12)
                },
                {
                    ...grim,
                    faction: FactionEnum.YengiiCore,
                    score: 97 + (8/12)
                },
                {
                    ...axxxvi,
                    faction: FactionEnum.KitCore,
                    score: 94 + (8/12)
                },
                {
                    ...wumbo,
                    faction: FactionEnum.CaylionCore,
                    score: 80 + (6/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/07/2023'),
            players:[
                {
                    ...rahm,
                    faction: FactionEnum.CaylionCore,
                    score: 65 + (8/12)
                },
                {
                    ...jeff,
                    faction: FactionEnum.FaderanCore,
                    score: 57 + (7/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.KjasCore,
                    score: 53 + (0/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.ImDrilCore,
                    score: 46 + (11/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/05/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.YengiiAlt,
                    score: 79 + (9/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.EniEtCore,
                    score: 79 + (8/12)
                },
                {
                    ...iggy,
                    faction: FactionEnum.KjasAlt,
                    score: 65 + (0/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.KitCore,
                    score: 61 + (2/12)
                },
            ]
        },
        <Game> {
            date: new Date('06/02/2023'),
            players:[
                {
                    ...jeff,
                    faction: FactionEnum.CaylionAlt,
                    score: 96 + (8/12)
                },
                {
                    ...toron,
                    faction: FactionEnum.ZethCore,
                    score: 89 + (5/12)
                },
                {
                    ...rahm,
                    faction: FactionEnum.KjasAlt,
                    score: 86 + (3/12)
                },
                {
                    ...hingle,
                    faction: FactionEnum.FaderanCore,
                    score: 72 + (10/12)
                },
                {
                    ...phoenix,
                    faction: FactionEnum.YengiiAlt,
                    score: 70 + (8/12)
                },
            ]
        },
    ];

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