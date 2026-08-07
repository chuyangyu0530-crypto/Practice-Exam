///////////////////////////////////////////////////////////////////////////////
// Globals - you CAN modify these as you wish.
///////////////////////////////////////////////////////////////////////////////

let game = {
    active: 0,
    turn: 'WHITE',
    moveCount: 0,
};

let gameTimer: ReturnType<typeof setTimeout> | null = null;
let turnTimer: ReturnType<typeof setTimeout> | null = null;

///////////////////////////////////////////////////////////////////////////////
// Functions to Complete
///////////////////////////////////////////////////////////////////////////////

/**
 * Starts a chess game with a 120-second limit.
 * If the game hasn't ended within that time, "TIMEOUT: END" should be printed.
 * 
 * @throws Error with message "Error: IN_PROGRESS" if game is already in progress
 * @success Logs "Game started! WHITE's turn"
 */
export function startGame() {
    // TODO: Implement this function
    console.log('Example value.');
}

/**
 * Makes a move. A player must make a valid move within 15 seconds.
 * If no move is made, their turn is skipped and "TIMEOUT: WHITE_TURN" or "TIMEOUT: BLACK_TURN" is printed.
 * 
 * @param player - The player making the move ("WHITE" or "BLACK")
 * @param move - The move notation (simplified, e.g., "e2-e4")
 * @throws Error with message "Error: GAME_OVER" if game is not active
 * @throws Error with message "Error: INVALID_TURN" if it's not the player's turn
 * @throws Error with message "Error: INVALID_MOVE" if move format is invalid
 * @success Logs "[player]'s turn" or "Checkmate! [player] wins!" or "Draw!"
 */
export function makeMove(player: string, move: string) {
    // TODO: Implement this function
    console.log('Example value.');
}

///////////////////////////////////////////////////////////////////////////////
// Helper Functions - you CAN modify these as you wish
///////////////////////////////////////////////////////////////////////////////

export function isValidMoveFormat(move: string): boolean {
    // Simplified: just check format like "e2-e4"
    const pattern = /^[a-h][1-8]-[a-h][1-8]$/;
    return pattern.test(move);
}

export function checkGameEnd(): string | false {
    // Simplified: game ends after 20 moves (draw) or specific winning moves
    if (game.moveCount >= 20) {
        return 'DRAW';
    }
    // In a real implementation, this would check for checkmate
    return false;
}

export function getGameState() {
    return {
        active: game.active,
        turn: game.turn,
        moveCount: game.moveCount,
    };
}

export function clear() {
    game.active = 0;
    game.turn = 'WHITE';
    game.moveCount = 0;

    if (gameTimer) {
        clearTimeout(gameTimer);
        gameTimer = null;
    }
    if (turnTimer) {
        clearTimeout(turnTimer);
        turnTimer = null;
    }
}
