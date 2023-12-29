"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameArray = void 0;
var sidcon_types_1 = require("./sidcon-types");
var noname = {
    name: '',
    isRegular: false
};
// const dnf = <Player> {
//     ...noname,
//     faction: FactionEnum.DNF,
//     score: 0,
// }
var elz = {
    name: 'Elzarius',
    isRegular: true,
};
var rahm = {
    name: 'Rahm Emanuel',
    isRegular: true,
};
var caine = {
    name: 'Caine',
    isRegular: true,
};
var axxxvi = {
    name: 'axxxvi1235',
    isRegular: true,
};
var wumbo = {
    name: 'Wumbology Major',
    isRegular: true,
};
var vorg = {
    name: 'Vorglich',
    isRegular: true,
};
var boloney = {
    name: 'boloney',
    isRegular: false,
};
var grim = {
    name: 'The Grim Heaper',
    isRegular: true,
};
var iggy = {
    name: 'Igmatus',
    isRegular: true,
};
var prosperity = {
    name: 'Prosperity',
    isRegular: true,
};
var markus = {
    name: 'markus',
    isRegular: true,
};
var zisos = {
    name: 'zisos78',
    isRegular: true,
};
var hingle = {
    name: 'Hingle McCringleberry',
    isRegular: true,
};
var toron = {
    name: 'Toron',
    isRegular: true,
};
var jeff = {
    name: 'Jeff',
    isRegular: true,
};
var luigi = {
    name: 'Luiginico',
    isRegular: true,
};
var starfire = {
    name: 'Starfire',
    isRegular: true,
};
var toan = {
    name: 'Toan()',
    isRegular: false
};
var hawk = {
    name: 'hawk',
    isRegular: false,
};
var phoenix = {
    name: 'phoenix',
    isRegular: false,
};
var queen = {
    name: 'queen chasitity',
    isRegular: false,
};
var glass = {
    name: 'castle of glass',
    isRegular: false,
};
var lastargument = {
    name: 'lastArgument',
    isRegular: false,
};
var abdla = {
    name: 'abdla',
    isRegular: false,
};
var geo = {
    name: 'mrgeometry1234',
    isRegular: false,
};
var leyfae = {
    name: 'Leyfae',
    isRegular: false,
};
var sanguinius = {
    name: 'sanguinius13',
    isRegular: false,
};
var brickman = {
    name: 'The Last Brickman',
    isRegular: false,
};
var notmiefault = {
    name: 'Notmiefault'
};
var shakespear = {
    name: 'Shakespear',
    isRegular: false,
};
var pmv = {
    name: '[PMV]RD',
    isRegular: false,
};
var gust = {
    name: 'GUST',
    isRegular: false,
};
var echo = {
    name: 'echomancer',
    isRegular: false,
};
var herby = {
    name: 'Herby Moreau',
    isRegular: false,
};
var hanaryoba = {
    name: 'HanaRyoba',
    isRegular: false,
};
var romulus = {
    name: '|TNUT| Romulus',
    isRegular: false,
};
var boy = {
    name: 'Boy_314',
    isRegular: false,
};
var blep = {
    name: 'blep time',
    isRegular: false
};
/* Omitting the DNF on 10/17/2023 */
/* Omitting the busted playtest of KitVorg on 10/15/2023 */
/* Omitting DNF on 10/14/2023 */
/* Omitting DNF on 09/30/2023 */
/* Omitting 08/07/2023 (iggy defaulted) */
/* Omitting DNF on 07/08/2023 */
/* Omitting DNF on 07/04/2023 */
/* Omitting DNF on 06/02/2023 */
/* Omitting DNF on 06/01/2023 */
function createGameArray() {
    var games = [
        // last boloney game
        {
            date: new Date('12/28/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 106 + (8 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 80 + (4 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 72 + (8 / 12) }),
                __assign(__assign({}, luigi), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 70 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilVorg, score: 68 + (7 / 12) }),
            ]
        },
        {
            date: new Date('12/27/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 88 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 82 + (3 / 12) }),
                __assign(__assign({}, leyfae), { faction: sidcon_types_1.FactionEnum.KitCore, score: 77 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 68 + (9 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 50 + (3 / 12) }),
            ]
        },
        {
            date: new Date('12/27/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 74 + (4 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 72 + (5 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 70 + (5 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 65 + (10 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (4 / 12) }),
            ]
        },
        {
            date: new Date('12/27/2023'),
            players: [
                __assign(__assign({}, luigi), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 75 + (10 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 68 + (5 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 68 + (0 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 60 + (0 / 12) }),
            ]
        },
        {
            date: new Date('12/24/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 66 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 61 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 60 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (5 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 49 + (5 / 12) }),
            ]
        },
        {
            date: new Date('12/20/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 76 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 71 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 64 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 60 + (0 / 12) }),
            ]
        },
        {
            date: new Date('12/19/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 62 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 59 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 58 + (9 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 49 + (11 / 12) }),
            ]
        },
        {
            date: new Date('12/19/2023'),
            players: [
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 59 + (7 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (0 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 57 + (1 / 12) }),
            ]
        },
        {
            date: new Date('12/17/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 72 + (1 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 74 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 69 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 55 + (5 / 12) }),
                __assign(__assign({}, sanguinius), { faction: sidcon_types_1.FactionEnum.KitCore, score: 51 + (10 / 12) }),
            ]
        },
        {
            date: new Date('12/16/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 87 + (1 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 84 + (11 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 83 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 72 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 72 + (5 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasVorg, score: 61 + (8 / 12) }),
            ]
        },
        {
            date: new Date('12/14/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 79 + (8 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 64 + (5 / 12) }),
                __assign(__assign({}, leyfae), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 63 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 58 + (11 / 12) }),
            ]
        },
        {
            date: new Date('12/13/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 70 + (7 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 66 + (1 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 63 + (9 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 53 + (0 / 12) }),
            ]
        },
        {
            date: new Date('12/12/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 78 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 65 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 64 + (3 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 62 + (5 / 12) }),
            ]
        },
        {
            date: new Date('12/08/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 112 + (4 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 106 + (9 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionVorg, score: 105 + (8 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 95 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 95 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 88 + (1 / 12) }),
            ]
        },
        {
            date: new Date('12/08/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 74 + (2 / 12) }),
                __assign(__assign({}, leyfae), { faction: sidcon_types_1.FactionEnum.KitCore, score: 67 + (1 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 63 + (2 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 48 + (8 / 12) }),
            ]
        },
        {
            date: new Date('12/05/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 69 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtVorg, score: 61 + (1 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 60 + (7 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 54 + (7 / 12) }),
            ]
        },
        {
            date: new Date('12/04/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 97 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 86 + (7 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 85 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 80 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 80 + (0 / 12) }),
            ]
        },
        {
            date: new Date('12/04/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 101 + (8 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 94 + (6 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 91 + (0 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 83 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 75 + (5 / 12) }),
            ]
        },
        {
            date: new Date('12/03/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 132 + (7 / 12) }),
                __assign(__assign({}, prosperity), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 123 + (2 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 120 + (11 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 116 + (4 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 111 + (7 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 102 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 96 + (7 / 12) }),
            ]
        },
        {
            date: new Date('12/02/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 79 + (1 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 78 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 70 + (3 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 62 + (4 / 12) }),
            ]
        },
        {
            date: new Date('12/01/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (5 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 61 + (11 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 61 + (6 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 51 + (6 / 12) }),
            ]
        },
        {
            date: new Date('11/27/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 88 + (5 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 87 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 76 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 74 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 66 + (9 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 61 + (4 / 12) }),
            ]
        },
        {
            date: new Date('11/27/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 85 + (7 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 68 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (7 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 47 + (11 / 12) }),
            ]
        },
        {
            date: new Date('11/27/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 76 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 65 + (2 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 63 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 51 + (11 / 12) }),
            ]
        },
        {
            date: new Date('11/24/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 69 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 67 + (7 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 59 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 52 + (2 / 12) }),
            ]
        },
        {
            date: new Date('11/22/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 74 + (1 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 73 + (9 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 72 + (8 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 64 + (4 / 12) }),
            ]
        },
        {
            date: new Date('11/16/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 77 + (10 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 70 + (6 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 68 + (10 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 67 + (0 / 12) }),
            ]
        },
        {
            date: new Date('11/13/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 87 + (11 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 82 + (9 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 82 + (1 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 80 + (5 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 76 + (6 / 12) }),
            ]
        },
        {
            date: new Date('11/12/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 94 + (11 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 89 + (1 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 75 + (5 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 73 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 73 + (5 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 72 + (7 / 12) }),
            ]
        },
        {
            date: new Date('11/12/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 67 + (1 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 67 + (1 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 63 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 61 + (3 / 12) }),
                __assign(__assign({}, geo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 39 + (0 / 12) }),
            ]
        },
        {
            date: new Date('11/11/2023'),
            players: [
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 69 + (8 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 66 + (10 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 66 + (9 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 55 + (1 / 12) }),
            ]
        },
        {
            date: new Date('11/11/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 80 + (7 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 75 + (7 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 71 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 65 + (2 / 12) }),
            ]
        },
        {
            date: new Date('11/10/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitCore, score: 66 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 61 + (4 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 47 + (1 / 12) }),
            ]
        },
        {
            date: new Date('11/09/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 72 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (10 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 54 + (0 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 49 + (2 / 12) }),
            ]
        },
        {
            date: new Date('11/09/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 77 + (10 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 72 + (0 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 70 + (8 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 55 + (6 / 12) }),
            ]
        },
        {
            date: new Date('11/08/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 89 + (3 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 77 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 75 + (0 / 12) }),
                __assign(__assign({}, brickman), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 45 + (6 / 12) }),
                __assign(__assign({}, noname), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 77 + (10 / 12) }),
            ]
        },
        {
            date: new Date('11/08/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 87 + (9 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 86 + (6 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 86 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 64 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtVorg, score: 61 + (0 / 12) }),
            ]
        },
        {
            date: new Date('11/06/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 86 + (5 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 83 + (11 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 70 + (1 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasVorg, score: 68 + (5 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 46 + (1 / 12) }),
            ]
        },
        {
            date: new Date('11/05/2023'),
            players: [
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 66 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 64 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 62 + (2 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 57 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 55 + (11 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 53 + (2 / 12) }),
            ]
        },
        {
            date: new Date('11/05/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 66 + (1 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 58 + (0 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (11 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 47 + (5 / 12) }),
            ]
        },
        {
            date: new Date('11/04/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 76 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 52 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 50 + (10 / 12) }),
            ]
        },
        {
            date: new Date('11/04/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 147 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 99 + (11 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 97 + (9 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 78 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 71 + (5 / 12) }),
                __assign(__assign({}, notmiefault), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 63 + (4 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 58 + (11 / 12) }),
            ]
        },
        {
            date: new Date('11/04/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 67 + (6 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 66 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 53 + (10 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 51 + (6 / 12) }),
            ]
        },
        {
            date: new Date('11/02/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 114 + (3 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 111 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 106 + (7 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 100 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 93 + (9 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 92 + (11 / 12) }),
            ]
        },
        {
            date: new Date('11/02/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 99 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 82 + (5 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 76 + (1 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 68 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 51 + (0 / 12) }),
            ]
        },
        {
            date: new Date('11/01/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 74 + (9 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 62 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanVorg, score: 61 + (7 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 42 + (10 / 12) }),
            ]
        },
        {
            date: new Date('10/31/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 67 + (7 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitVorg, score: 65 + (6 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.KjasVorg, score: 56 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 55 + (4 / 12) }),
            ]
        },
        {
            date: new Date('10/30/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 96 + (5 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 82 + (4 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 81 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 75 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 72 + (8 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.KitCore, score: 65 + (8 / 12) }),
            ]
        },
        {
            date: new Date('10/29/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 69 + (10 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 67 + (10 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (6 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 62 + (4 / 12) }),
            ]
        },
        {
            date: new Date('10/28/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 94 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 93 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 81 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 72 + (1 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 69 + (10 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 49 + (10 / 12) }),
            ]
        },
        {
            date: new Date('10/28/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 56 + (10 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 55 + (2 / 12) }),
                __assign(__assign({}, hawk), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 33 + (0 / 12) }),
            ]
        },
        {
            date: new Date('10/27/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitCore, score: 95 + (2 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 88 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 85 + (3 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 82 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 80 + (3 / 12) }),
                __assign(__assign({}, lastargument), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 62 + (8 / 12) }),
            ]
        },
        {
            date: new Date('10/26/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 98 + (9 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 97 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 94 + (7 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 88 + (5 / 12) }),
                __assign(__assign({}, lastargument), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 80 + (0 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 69 + (0 / 12) }),
            ]
        },
        {
            date: new Date('10/26/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 94 + (4 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 74 + (9 / 12) }),
                __assign(__assign({}, abdla), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 65 + (9 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 63 + (4 / 12) }),
            ]
        },
        {
            date: new Date('10/26/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 75 + (5 / 12) }),
                __assign(__assign({}, lastargument), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 56 + (7 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 56 + (7 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 38 + (5 / 12) }),
            ]
        },
        {
            date: new Date('10/25/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 80 + (7 / 12) }),
                __assign(__assign({}, lastargument), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 75 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 69 + (0 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 67 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 58 + (11 / 12) }),
            ]
        },
        {
            date: new Date('10/22/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 87 + (4 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 82 + (9 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 72 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 70 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 65 + (3 / 12) }),
            ]
        },
        {
            date: new Date('10/21/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 75 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 69 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (2 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 62 + (2 / 12) }),
            ]
        },
        {
            date: new Date('10/21/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 77 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 72 + (11 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 72 + (0 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 60 + (11 / 12) }),
            ]
        },
        {
            date: new Date('10/20/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 105 + (3 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilVorg, score: 96 + (11 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.KitCore, score: 92 + (8 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 89 + (1 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 75 + (4 / 12) }),
            ]
        },
        {
            date: new Date('10/21/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilVorg, score: 64 + (3 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (2 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 59 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitCore, score: 58 + (1 / 12) }),
            ]
        },
        {
            date: new Date('10/19/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 79 + (6 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 67 + (0 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 48 + (1 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 37 + (5 / 12) }),
            ]
        },
        {
            date: new Date('10/19/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 73 + (7 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 67 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 58 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 54 + (3 / 12) }),
            ]
        },
        {
            date: new Date('10/18/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 69 + (7 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 65 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 59 + (0 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 34 + (5 / 12) }),
            ]
        },
        {
            date: new Date('10/18/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 69 + (0 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 65 + (1 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 55 + (10 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 35 + (2 / 12) }),
            ]
        },
        {
            date: new Date('10/15/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 94 + (8 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 77 + (7 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 76 + (10 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 74 + (5 / 12) }),
                __assign(__assign({}, glass), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 66 + (9 / 12) }),
            ]
        },
        {
            date: new Date('10/13/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 89 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 86 + (11 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 85 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 72 + (3 / 12) }),
                __assign(__assign({}, lastargument), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (8 / 12) }),
            ]
        },
        {
            date: new Date('10/12/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 82 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 79 + (9 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 73 + (9 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 62 + (0 / 12) }),
            ]
        },
        {
            date: new Date('10/09/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiVorg, score: 96 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionVorg, score: 87 + (8 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 85 + (10 / 12) }),
                __assign(__assign({}, prosperity), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 85 + (1 / 12) }),
                __assign(__assign({}, shakespear), { faction: sidcon_types_1.FactionEnum.KitCore, score: 74 + (8 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 66 + (8 / 12) }),
            ]
        },
        {
            date: new Date('10/08/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 82 + (1 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 73 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 65 + (7 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (1 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 63 + (9 / 12) }),
            ]
        },
        {
            date: new Date('10/07/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 84 + (4 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionVorg, score: 80 + (6 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 75 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 75 + (7 / 12) }),
            ]
        },
        {
            date: new Date('10/06/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 86 + (3 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 79 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 67 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionVorg, score: 66 + (6 / 12) }),
            ]
        },
        {
            date: new Date('10/06/2023'),
            players: [
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 76 + (7 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 59 + (5 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 52 + (1 / 12) }),
            ]
        },
        {
            date: new Date('10/03/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 84 + (11 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 84 + (11 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 75 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 71 + (9 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 69 + (0 / 12) }),
                __assign(__assign({}, pmv), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 44 + (5 / 12) }),
            ]
        },
        {
            date: new Date('10/01/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 72 + (5 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 68 + (9 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 66 + (6 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 48 + (7 / 12) }),
            ]
        },
        {
            date: new Date('9/29/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 66 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 44 + (0 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 34 + (9 / 12) }),
            ]
        },
        {
            date: new Date('09/29/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 94 + (8 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 86 + (6 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 81 + (10 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 73 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 72 + (5 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 64 + (0 / 12) }),
            ]
        },
        {
            date: new Date('09/28/2023'),
            players: [
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 75 + (3 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 72 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 68 + (11 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 62 + (2 / 12) }),
            ]
        },
        {
            date: new Date('09/26/2023'),
            players: [
                __assign(__assign({}, prosperity), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 96 + (5 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 95 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 91 + (10 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 90 + (0 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 89 + (11 / 12) }),
                __assign(__assign({}, gust), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 75 + (6 / 12) }),
            ]
        },
        {
            date: new Date('09/26/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 70 + (2 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 63 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 61 + (3 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 51 + (4 / 12) }),
            ]
        },
        {
            date: new Date('09/24/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 86 + (11 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 85 + (11 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 82 + (3 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 77 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitCore, score: 73 + (0 / 12) }),
            ]
        },
        {
            date: new Date('09/24/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 96 + (2 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 79 + (2 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 78 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 78 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 72 + (6 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KitCore, score: 62 + (1 / 12) }),
            ]
        },
        {
            date: new Date('09/23/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 74 + (1 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 72 + (1 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 57 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 54 + (4 / 12) }),
            ]
        },
        {
            date: new Date('09/22/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 67 + (8 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 64 + (8 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 57 + (10 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 56 + (1 / 12) }),
            ]
        },
        {
            date: new Date('09/22/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 83 + (5 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 83 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 81 + (11 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 76 + (6 / 12) }),
                __assign(__assign({}, echo), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 71 + (7 / 12) }),
                __assign(__assign({}, brickman), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (2 / 12) }),
            ]
        },
        {
            date: new Date('09/18/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 57 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 56 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.KitCore, score: 56 + (0 / 12) }),
                __assign(__assign({}, gust), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 54 + (1 / 12) }),
            ]
        },
        {
            date: new Date('9/19/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 101 + (2 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 88 + (6 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 83 + (2 / 12) }),
                __assign(__assign({}, phoenix), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 72 + (8 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 61 + (4 / 12) }),
            ]
        },
        {
            date: new Date('09/18/2023'),
            note: "Unity Alt was buffed",
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 76 + (10 / 12) }),
                __assign(__assign({}, echo), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 70 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 70 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (11 / 12) }),
            ]
        },
        {
            date: new Date('09/10/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 94 + (9 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 86 + (1 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 84 + (3 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 82 + (7 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 73 + (0 / 12) }),
                __assign(__assign({}, herby), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 56 + (11 / 12) }),
            ]
        },
        {
            date: new Date('9/11/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 91 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 64 + (10 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 60 + (10 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 45 + (1 / 12) }),
            ]
        },
        {
            date: new Date('09/09/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 106 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 100 + (1 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 97 + (11 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 92 + (0 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 85 + (3 / 12) }),
            ]
        },
        {
            date: new Date('09/09/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 69 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 64 + (0 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 57 + (7 / 12) }),
                __assign(__assign({}, gust), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 40 + (5 / 12) }),
            ]
        },
        {
            date: new Date('09/09/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 78 + (2 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 70 + (3 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 66 + (7 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 46 + (7 / 12) }),
            ]
        },
        {
            date: new Date('09/03/2023'),
            players: [
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 71 + (2 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 63 + (3 / 12) }),
                __assign(__assign({}, herby), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 46 + (6 / 12) }),
            ]
        },
        {
            date: new Date('09/10/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 74 + (1 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 70 + (8 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 65 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 56 + (1 / 12) }),
            ]
        },
        {
            date: new Date('09/01/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 82 + (0 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 78 + (4 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 78 + (4 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 40 + (5 / 12) }),
            ]
        },
        {
            date: new Date('08/31/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 92 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 82 + (3 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 77 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 69 + (7 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 68 + (10 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (6 / 12) }),
            ]
        },
        {
            date: new Date('08/27/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 8 / 7 + (6 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 81 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 78 + (2 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 66 + (2 / 12) }),
            ]
        },
        {
            date: new Date('8/26/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 82 + (6 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 77 + (11 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 68 + (4 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 59 + (5 / 12) }),
            ]
        },
        {
            date: new Date('08/25/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 86 + (6 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 81 + (6 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 77 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 74 + (0 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 54 + (4 / 12) }),
            ]
        },
        {
            date: new Date('08/24/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 54 + (6 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 53 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 52 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 49 + (11 / 12) }),
            ]
        },
        {
            date: new Date('08/21/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 66 + (0 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 65 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 65 + (9 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 57 + (10 / 12) }),
            ]
        },
        {
            date: new Date('08/21/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 69 + (9 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.KitCore, score: 59 + (0 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 58 + (3 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 47 + (8 / 12) }),
            ]
        },
        {
            date: new Date('08/18/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 80 + (9 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 80 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 75 + (7 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 73 + (10 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 58 + (9 / 12) }),
            ]
        },
        {
            date: new Date('08/18/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 87 + (2 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 78 + (10 / 12) }),
                __assign(__assign({}, caine), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 64 + (8 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 44 + (11 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 38 + (11 / 12) }),
            ]
        },
        {
            date: new Date('08/16/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 125 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 112 + (11 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 104 + (7 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 97 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 94 + (1 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 86 + (8 / 12) }),
            ]
        },
        {
            date: new Date('08/15/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 72 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 67 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 64 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 63 + (8 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 56 + (2 / 12) }),
            ]
        },
        {
            date: new Date('08/15/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 81 + (5 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 75 + (7 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 69 + (11 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 58 + (4 / 12) }),
            ]
        },
        {
            date: new Date('8/14/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 68 + (7 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 64 + (8 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 61 + (7 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 43 + (7 / 12) }),
            ]
        },
        {
            date: new Date('08/14/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 76 + (3 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 75 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 60 + (4 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 60 + (2 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 50 + (6 / 12) }),
            ]
        },
        {
            date: new Date('08/13/2023'),
            players: [
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 67 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 62 + (11 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 53 + (1 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 50 + (1 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 48 + (3 / 12) }),
            ]
        },
        {
            date: new Date('08/11/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 81 + (1 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 71 + (5 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 68 + (11 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 55 + (0 / 12) }),
            ]
        },
        {
            date: new Date('08/10/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 77 + (2 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 66 + (0 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KitCore, score: 55 + (5 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 55 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 51 + (3 / 12) }),
            ]
        },
        {
            date: new Date('08/09/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KitCore, score: 101 + (11 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 98 + (3 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 91 + (7 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 90 + (0 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 69 + (4 / 12) }),
            ]
        },
        {
            date: new Date('08/09/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 81 + (7 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 74 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 70 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 69 + (8 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 67 + (7 / 12) }),
                __assign(__assign({}, hanaryoba), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 47 + (10 / 12) }),
            ]
        },
        {
            date: new Date('08/05/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 57 + (9 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 53 + (8 / 12) }),
                __assign(__assign({}, hanaryoba), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 46 + (10 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 44 + (0 / 12) }),
                __assign(__assign({}, romulus), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 34 + (6 / 12) }),
            ]
        },
        {
            date: new Date('08/04/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 99 + (9 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 98 + (9 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 97 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 81 + (3 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 62 + (2 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 38 + (4 / 12) }),
            ]
        },
        {
            date: new Date('08/04/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 91 + (8 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 90 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 90 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 77 + (11 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 65 + (8 / 12) }),
            ]
        },
        {
            date: new Date('08/03/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 95 + (8 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 87 + (0 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 67 + (0 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 63 + (6 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 45 + (4 / 12) }),
            ]
        },
        {
            date: new Date('08/03/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 61 + (78 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 61 + (4 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 52 + (9 / 12) }),
                __assign(__assign({}, queen), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 52 + (2 / 12) }),
            ]
        },
        {
            date: new Date('08/01/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 96 + (2 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 90 + (7 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 90 + (4 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 75 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 65 + (7 / 12) }),
            ]
        },
        {
            date: new Date('07/27/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 69 + (4 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 68 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 65 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 56 + (5 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 54 + (1 / 12) }),
            ]
        },
        {
            date: new Date('07/25/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 98 + (7 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 95 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 79 + (1 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 76 + (2 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 52 + (3 / 12) }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 52 + (3 / 12) }),
            ]
        },
        {
            date: new Date('07/24/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 72 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 69 + (5 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 68 + (11 / 12) }),
                __assign(__assign({}, caine), { faction: sidcon_types_1.FactionEnum.KitCore, score: 65 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 63 + (2 / 12) }),
            ]
        },
        {
            date: new Date('07/23/2023'),
            players: [
                __assign(__assign({}, toan), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 73 + (4 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 66 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 65 + (9 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 62 + (6 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 59 + (5 / 12) }),
            ]
        },
        {
            date: new Date('07/19/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 92 + (7 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.KitCore, score: 91 + (6 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 82 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 80 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 78 + (8 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 73 + (0 / 12) }),
            ]
        },
        {
            date: new Date('07/18/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 62 + (11 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 60 + (0 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 57 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 51 + (6 / 12) }),
            ]
        },
        {
            date: new Date('07/16/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 70 + (3 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 57 + (8 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 57 + (3 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 56 + (8 / 12) }),
            ]
        },
        {
            date: new Date('07/15/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 73 + (3 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 72 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 63 + (9 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 61 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 55 + (1 / 12) }),
            ]
        },
        {
            date: new Date('07/15/2023'),
            players: [
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 73 + (6 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (5 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 67 + (6 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 66 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 64 + (0 / 12) }),
            ]
        },
        {
            date: new Date('07/15/2023'),
            players: [
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 49 + (11 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 48 + (8 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 47 + (7 / 12) }),
                __assign(__assign({}, boy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 41 + (1 / 12) }),
            ]
        },
        {
            date: new Date('07/14/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 103 + (3 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 98 + (11 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 90 + (1 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 90 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 79 + (9 / 12) }),
            ]
        },
        {
            date: new Date('07/14/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 65 + (0 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 59 + (5 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 58 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 46 + (1 / 12) }),
            ]
        },
        {
            date: new Date('07/13/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 65 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 60 + (7 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 58 + (7 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 53 + (3 / 12) }),
            ]
        },
        {
            date: new Date('07/11/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 135 + (8 / 12) }),
                __assign(__assign({}, prosperity), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 134 + (8 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 109 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 104 + (5 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 101 + (9 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 87 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 79 + (6 / 12) }),
            ]
        },
        {
            date: new Date('07/11/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 59 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 54 + (5 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 53 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 44 + (6 / 12) }),
            ]
        },
        {
            date: new Date('07/09/2023'),
            players: [
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 69 + (0 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 67 + (9 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 56 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 55 + (4 / 12) }),
            ]
        },
        {
            date: new Date('07/09/2023'),
            players: [
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 71 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 68 + (10 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 67 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 57 + (1 / 12) }),
            ]
        },
        {
            date: new Date('07/08/2023'),
            players: [
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 83 + (1 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 81 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 75 + (1 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 63 + (10 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KitCore, score: 54 + (3 / 12) }),
                __assign(__assign({}, toan), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 47 + (2 / 12) }),
            ]
        },
        {
            date: new Date('07/07/2023'),
            players: [
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 75 + (7 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 69 + (4 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 64 + (3 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 60 + (1 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 46 + (8 / 12) }),
            ]
        },
        {
            date: new Date('07/06/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 78 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 69 + (6 / 12) }),
                __assign(__assign({}, zisos), { faction: sidcon_types_1.FactionEnum.KitCore, score: 63 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 62 + (6 / 12) }),
                __assign(__assign({}, toan), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 56 + (0 / 12) }),
            ]
        },
        {
            date: new Date('07/05/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 62 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 61 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 56 + (7 / 12) }),
            ]
        },
        {
            date: new Date('07/05/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 68 + (6 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 67 + (1 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 64 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 41 + (11 / 12) }),
            ]
        },
        {
            date: new Date('07/03/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 79 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 78 + (2 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 66 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 66 + (4 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.KitCore, score: 62 }),
                __assign(__assign({}, boloney), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 44 + (2 / 12) }),
            ]
        },
        {
            date: new Date('07/01/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 85 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 83 + (1 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 75 + (10 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 70 + (8 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 56 + (2 / 12) }),
            ]
        },
        {
            date: new Date('07/01/2023'),
            players: [
                __assign(__assign({}, phoenix), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 66 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 66 + (4 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 65 + (10 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 60 + (11 / 12) }),
            ]
        },
        {
            date: new Date('06/30/2023'),
            players: [
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.KitCore, score: 80 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 78 + (8 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 77 + (10 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 76 + (2 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 73 + (10 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityCore, score: 49 + (0 / 12) }),
            ]
        },
        {
            date: new Date('06/29/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 83 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 77 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 75 + (3 / 12) }),
                __assign(__assign({}, prosperity), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 72 + (0 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 70 + (11 / 12) }),
            ]
        },
        {
            date: new Date('06/28/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitCore, score: 85 + (2 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 76 + (9 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 73 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 68 + (7 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 56 + (4 / 12) }),
            ]
        },
        {
            date: new Date('06/27/2023'),
            players: [
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 70 + (7 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 88 + (10 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 72 + (4 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 65 + (11 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 63 + (6 / 12) }),
            ]
        },
        {
            date: new Date('06/25/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 68 + (4 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.UnityCoreBuffs, score: 64 + (5 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 64 + (0 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 59 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitCore, score: 55 + (2 / 12) }),
            ]
        },
        {
            date: new Date('06/23/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 109 + (4 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 106 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 104 + (10 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 100 + (9 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 82 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 76 + (3 / 12) }),
                __assign(__assign({}, vorg), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 74 + (1 / 12) }),
            ]
        },
        {
            date: new Date('06/21/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 104 + (11 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.ImDrilAlt, score: 102 + (6 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 96 + (6 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 91 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 80 + (9 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 80 + (7 / 12) }),
            ]
        },
        {
            date: new Date('06/18/2023'),
            players: [
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 68 + (4 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 64 + (1 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 62 + (9 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 62 + (8 / 12) }),
            ]
        },
        {
            date: new Date('06/14/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 88 + (11 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 88 + (5 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 84 + (8 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 82 + (5 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 73 + (6 / 12) }),
            ]
        },
        {
            date: new Date('06/11/2023'),
            players: [
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 92 + (11 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.EniEtAlt, score: 89 + (9 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 88 + (9 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 82 + (3 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.KitCore, score: 81 + (0 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 77 + (2 / 12) }),
            ]
        },
        {
            date: new Date('06/08/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 91 + (4 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 79 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KitAlt, score: 72 + (6 / 12) }),
                __assign(__assign({}, starfire), { faction: sidcon_types_1.FactionEnum.UnityAlt, score: 71 + (5 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 68 + (7 / 12) }),
                __assign(__assign({}, blep), { faction: sidcon_types_1.FactionEnum.FaderanAlt, score: 45 + (11 / 12) }),
            ]
        },
        {
            date: new Date('06/07/2023'),
            players: [
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 116 + (11 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.ZethAlt, score: 104 + (11 / 12) }),
                __assign(__assign({}, elz), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 102 + (11 / 12) }),
                __assign(__assign({}, markus), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 102 + (3 / 12) }),
                __assign(__assign({}, grim), { faction: sidcon_types_1.FactionEnum.YengiiCore, score: 97 + (8 / 12) }),
                __assign(__assign({}, axxxvi), { faction: sidcon_types_1.FactionEnum.KitCore, score: 94 + (8 / 12) }),
                __assign(__assign({}, wumbo), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 80 + (6 / 12) }),
            ]
        },
        {
            date: new Date('06/07/2023'),
            players: [
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.CaylionCore, score: 65 + (8 / 12) }),
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 57 + (7 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.KjasCore, score: 53 + (0 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.ImDrilCore, score: 46 + (11 / 12) }),
            ]
        },
        {
            date: new Date('06/05/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 79 + (9 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.EniEtCore, score: 79 + (8 / 12) }),
                __assign(__assign({}, iggy), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 65 + (0 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.KitCore, score: 61 + (2 / 12) }),
            ]
        },
        {
            date: new Date('06/02/2023'),
            players: [
                __assign(__assign({}, jeff), { faction: sidcon_types_1.FactionEnum.CaylionAlt, score: 96 + (8 / 12) }),
                __assign(__assign({}, toron), { faction: sidcon_types_1.FactionEnum.ZethCore, score: 89 + (5 / 12) }),
                __assign(__assign({}, rahm), { faction: sidcon_types_1.FactionEnum.KjasAlt, score: 86 + (3 / 12) }),
                __assign(__assign({}, hingle), { faction: sidcon_types_1.FactionEnum.FaderanCore, score: 72 + (10 / 12) }),
                __assign(__assign({}, phoenix), { faction: sidcon_types_1.FactionEnum.YengiiAlt, score: 70 + (8 / 12) }),
            ]
        },
    ];
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
