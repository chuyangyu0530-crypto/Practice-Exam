import request from 'sync-request-curl';
import { port, url } from './config.json';

const SERVER_URL = `${url}:${port}`;

function clear() {
    return request('DELETE', `${SERVER_URL}/clear`);
}

function createTeam(teamName: string, players: string[]) {
    return request('POST', `${SERVER_URL}/team/create`, {
        json: { teamName, players }
    });
}

function getTeamsList(teamIds: string) {
    return request('GET', `${SERVER_URL}/team/list`, {
        qs: { teamIds }
    });
}

function getTeamById(teamId: number) {
    return request('GET', `${SERVER_URL}/team/${teamId}`);
}

function addTeamPlayer(role: string, teamId: number, playerName: string) {
    return request('PUT', `${SERVER_URL}/team/${teamId}/${playerName}`, {
        headers: { role }
    });
}

function updateTeamPlayers(role: string, teamId: number, oldPlayerName: string, newPlayerName: string) {
    return request('PUT', `${SERVER_URL}/team/${teamId}/player`, {
        headers: { role },
        json: { oldPlayerName, newPlayerName }
    });
}

describe('Soccer Team API Tests', () => {
    beforeEach(() => {
        clear();
    });

    test('Create Team - Success', () => {
        const res = createTeam('Manchester United', ['Ronaldo', 'Rashford']);
        expect(res.statusCode).toBe(200);
        const body = JSON.parse(res.body.toString());
        expect(body).toHaveProperty('teamId');
    });

    test('Create Team - Invalid Name', () => {
        const res = createTeam('MU', ['Ronaldo']);
        expect(res.statusCode).toBe(400);
        const body = JSON.parse(res.body.toString());
        expect(body.error).toBe('INVALID_TEAM_NAME');
    });

    test('Get Team By ID - Success', () => {
        const createRes = createTeam('Liverpool', ['Salah']);
        const teamId = JSON.parse(createRes.body.toString()).teamId;

        const res = getTeamById(teamId);
        expect(res.statusCode).toBe(200);
        const body = JSON.parse(res.body.toString());
        expect(body.teamName).toBe('Liverpool');
        expect(body.players).toContain('Salah');
    });

    test('Add Player - Success', () => {
        const createRes = createTeam('Chelsea', ['Sterling']);
        const teamId = JSON.parse(createRes.body.toString()).teamId;

        const res = addTeamPlayer('admin', teamId, 'Palmer');
        expect(res.statusCode).toBe(200);

        const getRes = getTeamById(teamId);
        const body = JSON.parse(getRes.body.toString());
        expect(body.players).toContain('Palmer');
    });

    test('Update Player - Success', () => {
        const createRes = createTeam('Arsenal', ['Saka']);
        const teamId = JSON.parse(createRes.body.toString()).teamId;

        const res = updateTeamPlayers('admin', teamId, 'Saka', 'Odegaard');
        expect(res.statusCode).toBe(200);

        const getRes = getTeamById(teamId);
        const body = JSON.parse(getRes.body.toString());
        expect(body.players).toContain('Odegaard');
        expect(body.players).not.toContain('Saka');
        expect(body.stats.playerTransferLog).toHaveLength(1);
        expect(body.stats.playerTransferLog[0].oldPlayer).toBe('Saka');
        expect(body.stats.playerTransferLog[0].newPlayer).toBe('Odegaard');
    });
});
