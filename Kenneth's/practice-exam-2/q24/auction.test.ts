import { startAuction, placeBid, clear } from "./auction"
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

describe('startAuction tests', () => {
    test('successfully calls startAuction and logs starting message', () => {
        startAuction();
        expect(consoleSpy).toHaveBeenLastCalledWith('Auction started! Starting bid: $100');
    });

    test('should error when there is an active auction and startAuction is called', () => {
        startAuction();
        expect(consoleSpy).toHaveBeenLastCalledWith('Auction started! Starting bid: $100');
        startAuction();
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: IN_PROGRESS');
    });

    test('timeout is logged if time exceeded', () => {
        startAuction();
        jest.advanceTimersByTime(29000)
        expect(consoleSpy).not.toHaveBeenCalledWith('TIMEOUT: END');
        jest.advanceTimersByTime(1000)
        expect(consoleSpy).toHaveBeenLastCalledWith('TIMEOUT: END');
    });

    test('successfully start auction after timeout', () => {
        startAuction();
        jest.advanceTimersByTime(30000)
        startAuction();
        expect(consoleSpy).toHaveBeenLastCalledWith('Auction started! Starting bid: $100');
    });

    test('log TIMEOUT: SOLD after 5s of inactivity', () => {
        startAuction();
        placeBid('Alice', 150);
        jest.advanceTimersByTime(5000)
        expect(consoleSpy).toHaveBeenLastCalledWith('TIMEOUT: SOLD to Alice for $150!');
    });
})

describe('placeBid error tests', () => {
    test('calls placeBid when no auction is active', () => {
        placeBid('Alice', 150);
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: AUCTION_OVER');
    });

    test('calls placeBid with amount too low', () => {
        startAuction();
        placeBid('Alice', 150);
        placeBid('Bob', 140);
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: BID_TOO_LOW');
    });

    test('cannot bid after auction timeout', () => {
        startAuction();
        jest.advanceTimersByTime(30000);
        placeBid('Alice', 150);
        expect(consoleSpy).toHaveBeenLastCalledWith('Error: AUCTION_OVER');
    });
})

describe('full auction', () => {
    test('completes with multiple bids', () => {
        startAuction();
        expect(consoleSpy).toHaveBeenLastCalledWith('Auction started! Starting bid: $100');

        placeBid('Alice', 150);
        expect(consoleSpy).toHaveBeenLastCalledWith('Bid accepted: Alice bids $150');

        placeBid('Bob', 200);
        expect(consoleSpy).toHaveBeenLastCalledWith('Bid accepted: Bob bids $200');

        jest.advanceTimersByTime(5000);
        expect(consoleSpy).toHaveBeenLastCalledWith('TIMEOUT: SOLD to Bob for $200!');
    });
});
