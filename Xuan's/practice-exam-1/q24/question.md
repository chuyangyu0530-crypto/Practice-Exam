## Chess Timer (15 marks)

Chess is a very interesting game that can take a long time to play! However, we just want to create a simple timer for speed chess games that will be played in just 2 minutes (or 120 seconds)!

Each round a player has a chance to make a move within 15 seconds. If they do not make a move, we skip their turn. If the game has no outcome within 120 seconds, we will also end the game.

You may assume that any move that follows the valid format checked by `isValidMoveFormat()` function is also a valid move. You do not need to keep track of the board state, only the timers and movement between turns.

### Task

You will implment a basic chess timer state machine which will begin a chess match and allow for moves. If any of the timers ends (120s since start or 15s since last move), then the game ends with a timeout. The chess timer will keep track of which player currently has their turn. A player is given 15 seconds to make a move before their turn is skipped. After a move, if 20 turns have been taken in total, then the game is declared a draw.

To fulfil this task, you must implement at least the following two functions:
1. `startGame()`
2. `makeMove()`

Here is the state diagram:

 ![Chess State Diagram](./q12/chess_state_diagram.png)

#### Interface
Implement these functions in `q12/chess.ts`:

Strings provided in the "Errors" and "Success" columns are to be written to console using `console.log`, not returned

<table>
   <thead>
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Parameters</th>
         <th>Errors</th>
         <th>Success</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>startGame</code></td>
         <td>
            <p>Starts a chess timer with a 120-second limit.</p>
            <p>
               If the chess game hasn't ended within that time,
               <code>"TIMEOUT: END"</code> should be printed.
            </p>
         </td>
         <td>N/A</td>
         <td>
            <ul>
               <li>
                  <code>"Error: IN_PROGRESS"</code> printed if a chess timer is already in
                  progress
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Game started! WHITE's turn"</code> printed on success</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>makeMove</code></td>
         <td>
            <p>
               The current player makes a move
            </p>
            <p>
               If no move is made within 15 seconds, then the current turn is skipped and the other player make take their turn 
               <code>"TIMEOUT: WHITE_TURN"</code> or <code>"TIMEOUT: BLACK_TURN"</code> is printed
            </p>
         </td>
         <td>
            <ul>
               <li>
                  <code>player</code>: the player making the move
               </li>
               <li><code>move</code>: a string representing a move from one square of the board to another</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Error: GAME_OVER"</code> is printed if game is not active</li>
               <li>
                  <code>"Error: INVALID_TURN"</code> is printed if it is not the current players turn.
               </li>
               <li>
                  <code>"Error: INVALID_MOVE"</code> is printed if the provided move is not in a valid format
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"WHITE's turn"</code> is printed on success if BLACK made a move</li>
               <li><code>"BLACK's turn"</code> is printed on success if WHITE made a move</li>
               <li><code>"Draw!"</code> is printed on success if 20 moves have been taken</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

#### Provided Helper Functions

You may modify these if you wish

<table>
   <thead>
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Parameters</th>
         <th>Returns</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>getGameState</code></td>
         <td>retrieves the current state of the game</td>
         <td>N/A</td>
         <td> An object with the following properties
            <li><code>active</code>: 0 if the auction is not active, 1 otherwise </li>
            <li><code>turn</code>: The current player's turn - either WHITE or BLACK</li>
            <li><code>moveCount</code>: The number of moves taken so far</li>
         </td>
      </tr>
      <tr>
         <td><code>isValidMoveFormat</code></td>
         <td>checks to see if a move string follows the correct format</td>
         <td><code>move</code>: a string indicating an attempted move</td>
         <td><ul>
         <li><code>true</code> if the move is of a valid format</li>
         <li><code>false</code>if the move is NOT of a valid format</li>
         </ul></td>
      </tr>
      <tr>
         <td><code>checkGameEnd</code></td>
         <td>checks to see if a gameEnd condition like 20 or more moves has been met</td>
         <td>N/A</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><code>clear</code></td>
         <td>resets the auction and clears all timers</td>
         <td>N/A</td>
         <td><ul>
         <li><code>'DRAW'</code> if 20 or more moves have been taken for this chess timer</li>
         <li><code>false</code>if fewer than 20 moves have been taken</li>
         </ul></td>
      </tr>
   </tbody>
</table>

### Marking

When you think your program is working, you can run some simple automated checks:
 - tests: `npm run test`
 - type check: `npm run tsc`
 
No additional tests will be run. Therefore, any behavior not covered by the given tests will be considered undefined.