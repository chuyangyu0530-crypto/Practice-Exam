## Auction Timers (15 marks)

One of the most interesting ways to sell a product is to put it up for auction. Today you will implement a fast-paced auction that lasts only 30 seconds!

An auction starts with an item and a starting bid. Bidders can place a bid that is greater than the starting bid and current bid to be in the winning position in the auction. The auction ends if either 30seconds passes from the beginning of the auction or there is a period of 5 seconds with no bidder. Then whoever is the current winning bidder gets to claim the item!

### Task

You will implment a basic auction state machine which will begin an auction and take bids. If any of the timers ends (30s since start or 5s since last bid), then the auction ends and the winning bidder receives the item. 

To fulfil this task, you must implement at least the following two functions:
1. `startAuction()`
2. `placeBid()`

Here is the state diagram:

 ![Auction State Diagram](./q12/auction_state_diagram.png)

#### Interface
Implement these functions in `q12/auction.ts`:

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
         <td><code>startAuction</code></td>
         <td>
            <p>Starts a auction with a 30-second limit.</p>
            <p>
               If the auction hasn't ended within that time,
               <code>"TIMEOUT: END"</code> should be printed.
            </p>
         </td>
         <td>N/A</td>
         <td>
            <ul>
               <li>
                  <code>"Error: IN_PROGRESS"</code> printed if auction is already in
                  progress
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Auction started! Starting bid: $100"</code> printed on success</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>placeBid</code></td>
         <td>
            <p>
               Places a bid. A bid must be placed within 5 seconds of the start or the previous bid.
            </p>
            <p>
               If no bid is made within 5 seconds, then the auction ends 
               <code>"TIMEOUT: SOLD to ${auction.currentBidder} for $${auction.currentBid}!"</code> is printed
            </p>
         </td>
         <td>
            <ul>
               <li>
                  <code>bidder</code>: the name of the person putting in a bid
               </li>
               <li><code>amount</code>: amount bid</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Error: AUCTION_OVER"</code> is printed if auction is not active</li>
               <li>
                  <code>"Error: BID_TOO_LOW"</code> is printed if the amount in this bid is lower than the currentBid
               </li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>"Bid accepted: ${bidder} bids $${amount}"</code> is printed on success</li>
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
         <td><code>getAuctionState</code></td>
         <td>retrieves the current state of the auction</td>
         <td>N/A</td>
         <td> An object with the following properties
            <li><code>active</code>: 0 if the auction is not active, 1 otherwise </li>
            <li><code>currentBid</code>: The current highest bid</li>
            <li><code>currentBidder</code>: The name of the current highest bidder</li>
         </td>
      </tr>
      <tr>
         <td><code>clear</code></td>
         <td>resets the auction and clears all timers</td>
         <td>N/A</td>
         <td>N/A</td>
      </tr>
   </tbody>
</table>

### Marking

When you think your program is working, you can run some simple automated checks:
 - tests: `npm run test`
 - type check: `npm run tsc`

No additional tests will be run. Therefore, any behavior not covered by the given tests will be considered undefined.