export type Game = {
    id: number
    players: Player[],
    numberOfPlayers: number;
    totalScore: number;
    averageScore: number;
    note?: string
    readonly date: Date,
}


export type Player = {
    name: string;
    faction: FactionEnum;
    score: number,
    scoreDiff?: number
    isRegular: boolean
}


export enum FactionEnum {
    KitCore = 1,
    KjasCore,
    CaylionCore,
    FaderanCore,
    UnityCore,
    UnityCoreBuffs,
    EniEtCore,
    ImDrilCore,
    ZethCore,
    YengiiCore,
    KitAlt,
    KjasAlt,
    CaylionAlt,
    FaderanAlt,
    UnityAlt,
    EniEtAlt,
    ImDrilAlt,
    ZethAlt,
    YengiiAlt,
    KitVorg,    
    KjasVorg,
    CaylionVorg,
    FaderanVorg,
    UnityVorg,
    EniEtVorg,
    ImDrilVorg,
    ZethVorg,
    YengiiVorg,
}