import { startGame, makeMove, clear } from "./chess"
import { jest } from '@jest/globals'

let consoleSpy: ReturnType<typeof jest.spyOn>;

Object.defineProperty(global, 'performance', {
    writable: true,
});
jest.useFakeTimers({ legacyFakeTimers: true })

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
});

afterEach(() => {
    consoleSpy.mockClear();
    consoleSpy.mockRestore();
    clear();
});

describe('startGame tests', () => {
    test('successfully calls startGame and logs starting message', () => {
        startGame();
        expect(consoleSpy).toHaveBeenLastCalledWith("Game started! WHITE's turn");
    });

    test('should error when there is an active game and startGame is called', () => {
        startGame();
        expect(consoleSpy).toHaveBeenLastCalledWith("Game started! WHITE's turn");
        startGame();
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: IN_PROGRESS');
    });

    test('timeout is logged if time exceeded', () => {
        startGame();
        jest.advanceTimersByTime(119000)
        expect(consoleSpy).not.toHaveBeenCalledWith('TIMEOUT: END');
        jest.advanceTimersByTime(1000)
        expect(consoleSpy).toHaveBeenLastCalledWith('TIMEOUT: END');
    });

    test('successfully start game after timeout', () => {
        startGame();
        jest.advanceTimersByTime(120000)
        startGame();
        expect(consoleSpy).toHaveBeenLastCalledWith("Game started! WHITE's turn");
    });

    test('log TIMEOUT: BLACK_TURN after 15s of inactivity', () => {
        startGame();
        jest.advanceTimersByTime(15000)
        expect(consoleSpy).toHaveBeenLastCalledWith("TIMEOUT: BLACK_TURN");
    });

    test('log TIMEOUT: WHITE_TURN after 30s of inactivity', () => {
        startGame();
        jest.advanceTimersByTime(30000)
        expect(consoleSpy).toHaveBeenLastCalledWith("TIMEOUT: WHITE_TURN");
    });
})

describe('makeMove error tests', () => {
    test('calls makeMove when no game is active', () => {
        makeMove('WHITE', 'e2-e4');
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: GAME_OVER');
    });

    test('calls makeMove with invalid turn', () => {
        startGame();
        makeMove('BLACK', 'e7-e5');
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: INVALID_TURN');
    });

    test('calls makeMove with invalid format', () => {
        startGame();
        makeMove('WHITE', 'invalid');
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: INVALID_MOVE');
    });

    test('cannot move after game timeout', () => {
        startGame();
        jest.advanceTimersByTime(120000);
        makeMove('WHITE', 'e2-e4');
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: GAME_OVER');
    });
})

describe('full game', () => {
    test('completes with multiple moves', () => {
        startGame();
        expect(consoleSpy).toHaveBeenLastCalledWith("Game started! WHITE's turn");

        makeMove('WHITE', 'e2-e4');
        expect(consoleSpy).toHaveBeenLastCalledWith("BLACK's turn");

        makeMove('BLACK', 'e7-e5');
        expect(consoleSpy).toHaveBeenLastCalledWith("WHITE's turn");

        makeMove('WHITE', 'd2-d4');
        expect(consoleSpy).toHaveBeenLastCalledWith("BLACK's turn");
    });

    test('ends in draw after 20 moves', () => {
        startGame();

        for (let i = 0; i < 10; i++) {
            makeMove('WHITE', 'e2-e4');
            makeMove('BLACK', 'e7-e5');
        }

        expect(consoleSpy).toHaveBeenLastCalledWith('Draw!');
    });
});
