/**
 * The backend implementation below has already been completed for you.
 * DO NOT make any modifications to the code below.
 */

import {
    PlayerTransferLog,
    EmptyObject,
    ErrorObject,
    getData,
    TeamReturn,
    TeamsReturn
} from './dataStore';

/**
 * Generate the current timestamp in seconds.
 *
 * @returns {number} - Unix timestamp
 */
const generateTimestamp = () => Math.floor(Date.now() / 1000);

/**
 * Clear all team and stats from the data object.
 *
 * @returns {EmptyObject}
 */
export const clear = (): EmptyObject => {
    const data = getData();
    data.teams = [];
    data.stats = {
        playerTransferLog: []
    };
    return {};
};

/**
 * Create a new team
 *
 * Validation Rules:
 * - `teamName` must be between 3 and 20 characters.
 * - A maximum of 11 players can be assigned to a team.
 * - Team names must be unique.
 * - Player names must not be assigned to any existing team.
 *
 * @param {string} teamName - The name of the team
 * @param {string[]} players - A list of players (max 11) to assign to the team
 * @returns {{ teamId: number } | ErrorObject} - Returns the created team's Id on success,
 * or an object containing the error message if validation fails.
 */
export const createTeam = (teamName: string, players: string[]): { teamId: number } | ErrorObject => {
    const data = getData();
    const MIN_TEAMNAME = 3;
    const MAX_TEAMNAME = 20;
    const MAX_PLAYERS = 11;

    if (!teamName) {
        return {
            error: 'INVALID_TEAM_NAME',
            message: 'Empty team name'
        };
    }
    if (teamName.length < MIN_TEAMNAME || teamName.length > MAX_TEAMNAME) {
        return {
            error: 'INVALID_TEAM_NAME',
            message: 'Team name too short or too long'
        };
    }
    if (players.length > MAX_PLAYERS) {
        return {
            error: 'INVALID_PLAYERS',
            message: 'At most 11 players can be nominated'
        };
    }

    const uniquePlayers = new Set(players);
    if (uniquePlayers.size !== players.length) {
        return {
            error: 'INVALID_PLAYERS',
            message: 'Duplicate players in the same team'
        };
    }

    if (data.teams.find(t => t.teamName === teamName)) {
        return {
            error: 'INVALID_TEAM_NAME',
            message: 'Duplicate team name'
        };
    }

    for (const player of players) {
        if (data.teams.find(t => t.players.includes(player))) {
            return {
                error: 'INVALID_PLAYERS',
                message: 'Player already in another team'
            };
        }
    }

    const teamId = data.teams.length;
    const newTeam = {
        teamId: teamId,
        teamName: teamName,
        players: players,
    };
    data.teams.push(newTeam);

    return { teamId };
};


/**
 * Get list of teams by IDs
 *
 * Validation Rules:
 * - Each `teamId` must refer to a valid team.
 *
 * @param {number[]} teamIds - A list of teamIds to retrieve
 * @returns {TeamsReturn | ErrorObject} - Returns a list of teams if found,
 * otherwise, returns an object containing the error message if validation fails.
 */
export const getTeamsList = (teamIds: number[]): TeamsReturn | ErrorObject => {
    const data = getData();

    const teams = [];
    for (const teamId of teamIds) {
        const team = data.teams.find(t => t.teamId === teamId);
        if (!team) {
            return {
                error: 'INVALID_TEAM_ID',
                message: 'Invalid teamId'
            };
        }

        const transferLog = data.stats.playerTransferLog
            .filter(change => change.teamId === teamId)
            .map(({ teamId, ...rest }) => rest);

        teams.push({
            teamName: team.teamName,
            players: team.players,
            stats: {
                playerTransferLog: transferLog
            }
        });
    }

    return { teams };
};

/**
 * Get team by teamId
 *
 * Validation Rules:
 * - `teamId` must refer to a valid team.
 *
 * @param {number} teamId - The unique id of the team
 * @returns {TeamReturn | ErrorObject} - Returns the team data if found,
 * otherwise an object containing the error message if validation fails.
 */
export const getTeamById = (teamId: number): TeamReturn | ErrorObject => {
    const data = getData();

    const team = data.teams.find(t => t.teamId === teamId);
    if (!team) {
        return {
            error: 'INVALID_TEAM_ID',
            message: 'Invalid teamId'
        };
    }

    const transferLog = data.stats.playerTransferLog
        .filter(change => change.teamId === teamId)
        .map(({ teamId, ...rest }) => rest);

    return {
        teamName: team.teamName,
        players: team.players,
        stats: {
            playerTransferLog: transferLog
        }
    };
};

/**
 * Update team by adding a new player name
 *
 * Validation:
 * - Only users with the 'admin' role can update the team.
 * - `teamId` must refer to a valid team.
 * - A maximum of 11 players can be assigned to a team.
 * - `playerName` must not be assigned to any existing team.
 *
 * @param {string} role - The role of the user attempting to update players to the team
 * @param {number} teamId - The Id of the team whose players are being updated
 * @param {string} playerName - The new player to be added to the team
 * @returns {EmptyObject | ErrorObject} Returns an empty object on success, or an error object if validation fails.
 */
export const addTeamPlayer = (role: string, teamId: number, playerName: string): EmptyObject | ErrorObject => {
    const data = getData();

    if (role !== 'admin') {
        return {
            error: 'INVALID_ROLE',
            message: 'Permission denied to change a player'
        };
    }

    const team = data.teams.find(t => t.teamId === teamId);
    if (!team) {
        return {
            error: 'INVALID_TEAM_ID',
            message: 'Invalid teamId'
        };
    }

    if (team.players.length >= 11) {
        return {
            error: 'INVALID_PLAYERS',
            message: 'A team must have max 11 players'
        };
    }

    if (team.players.includes(playerName)) {
        return {
            error: 'INVALID_PLAYER_NAME',
            message: 'The player is already in the same team'
        };
    }

    if (data.teams.find(t => t.players.includes(playerName))) {
        return {
            error: 'INVALID_PLAYER_NAME',
            message: 'The player is already in another team'
        };
    }

    team.players.push(playerName);

    return {};
};

/**
 * Replace a player
 *
 * Validation:
 * - Only users with the 'admin' role can update the players.
 * - `teamId` must refer to a valid team.
 * - `oldPlayerName` must exist on the team if given.
 * - `newPlayerName` is required.
 * - `newPlayerName` must not be assigned to any existing team.
 *
 * @param {string} role - The role of the user attempting to update players to the team
 * @param {number} teamId - The Id of the team whose players are being updated
 * @param {string} oldPlayerName - The player to be replaced.
 * @param {string} newPlayerName - The new player to replace the old player.
 * @returns {EmptyObject | ErrorObject} Returns an empty object on success, or an error object if validation fails.
 */
export const updateTeamPlayers = (role: string, teamId: number, oldPlayerName: string, newPlayerName: string): EmptyObject | ErrorObject => {
    const data = getData();

    if (role !== 'admin') {
        return {
            error: 'INVALID_ROLE',
            message: 'Permission denied to change a player'
        };
    }

    const team = data.teams.find(t => t.teamId === teamId);
    if (!team) {
        return {
            error: 'INVALID_TEAM_ID',
            message: 'Invalid teamId'
        };
    }

    if (!team.players.includes(oldPlayerName)) {
        return {
            error: 'INVALID_OLD_PLAYER',
            message: 'Old player does not exist in the team'
        };
    }

    if (!newPlayerName) {
        return {
            error: 'INVALID_NEW_PLAYER',
            message: 'Missing new player name'
        };
    }

    if (team.players.includes(newPlayerName)) {
        return {
            error: 'INVALID_NEW_PLAYER',
            message: 'New player exists in the same team'
        };
    }

    if (data.teams.find(t => t.players.includes(newPlayerName))) {
        return {
            error: 'INVALID_NEW_PLAYER',
            message: 'New player is already in another team'
        };
    }

    const playerIndex = team.players.indexOf(oldPlayerName);
    team.players[playerIndex] = newPlayerName;

    const newTransferLog: PlayerTransferLog = {
        teamId: teamId,
        oldPlayer: oldPlayerName,
        newPlayer: newPlayerName,
        timeUpdated: generateTimestamp()
    };
    data.stats.playerTransferLog.push(newTransferLog);

    return {};
};

