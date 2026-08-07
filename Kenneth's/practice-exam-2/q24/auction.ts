///////////////////////////////////////////////////////////////////////////////
// Globals - you CAN modify these as you wish.
///////////////////////////////////////////////////////////////////////////////

let auction = {
    active: 0,
    currentBid: 0,
    currentBidder: '',
    startingPrice: 100,
};

let gameTimer: ReturnType<typeof setTimeout> | null = null;
let bidTimer: ReturnType<typeof setTimeout> | null = null;

///////////////////////////////////////////////////////////////////////////////
// Functions to Complete
///////////////////////////////////////////////////////////////////////////////

/**
 * Starts an auction with a 30-second limit.
 * If the auction hasn't ended within that time, "TIMEOUT: END" should be printed.
 * 
 * @throws Error with message "Error: IN_PROGRESS" if auction is already in progress
 * @success Logs "Auction started! Starting bid: $100"
 */
export function startAuction() {
    // TODO: Implement this function
    console.log('Example value.');
}

/**
 * Places a bid. A bidder must place a valid bid within 5 seconds of the previous bid.
 * If no bid is made, the auction ends and "TIMEOUT: SOLD" is printed with the winner.
 * 
 * @param bidder - The name of the bidder
 * @param amount - The bid amount
 * @throws Error with message "Error: AUCTION_OVER" if auction is not active
 * @throws Error with message "Error: BID_TOO_LOW" if bid is not higher than current bid
 * @success Logs "Bid accepted: [bidder] bids $[amount]" or "SOLD to [bidder] for $[amount]!"
 */
export function placeBid(bidder: string, amount: number) {
    // TODO: Implement this function
    console.log('Example value.');
}

///////////////////////////////////////////////////////////////////////////////
// Helper Functions - you CAN modify these as you wish
///////////////////////////////////////////////////////////////////////////////

export function getAuctionState() {
    return {
        active: auction.active,
        currentBid: auction.currentBid,
        currentBidder: auction.currentBidder,
    };
}

export function clear() {
    auction.active = 0;
    auction.currentBid = 0;
    auction.currentBidder = '';
    auction.startingPrice = 100;

    if (gameTimer) {
        clearTimeout(gameTimer);
        gameTimer = null;
    }
    if (bidTimer) {
        clearTimeout(bidTimer);
        bidTimer = null;
    }
}
