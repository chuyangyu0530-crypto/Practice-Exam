export type EmptyObject = Record<string, never>;

export interface ErrorObject {
    error: string,
    message: string,
}

export interface Team {
    teamId: number,
    teamName: string,
    players: string[],
}

export interface PlayerTransferLog {
    teamId: number,
    oldPlayer: string,
    newPlayer: string,
    timeUpdated: number,
}

export interface PlayerTransferLogReturn {
    oldPlayer: string,
    newPlayer: string,
    timeUpdated: number,
}

export interface Stats {
    playerTransferLog: PlayerTransferLog[]
}

export interface StatsReturn {
    playerTransferLog: PlayerTransferLogReturn[]
}

export interface TeamReturn {
    teamName: string,
    players: string[],
    stats: StatsReturn
}

export interface TeamsReturn {
    teams: TeamReturn[],
}

export interface DataStore {
    teams: Team[],
    stats: Stats
}

const dataStore: DataStore = {
    teams: [],
    stats: {
        playerTransferLog: []
    }
};

export const getData = (): DataStore => dataStore;
