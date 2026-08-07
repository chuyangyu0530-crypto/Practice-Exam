///////////////////////////////////////////////////////////////////////////////
// Interfaces
///////////////////////////////////////////////////////////////////////////////

type Genre = 'action' | 'comedy' | 'drama' | 'horror';
type Rating = number; // 0 to 10
type FriendsAvailable = boolean;
type PopcornStatus = 'fresh' | 'stale' | 'none';
type TicketPrice = number;

interface DecisionFactors {
    genre: Genre,
    rating: Rating,
    friendsAvailable: FriendsAvailable,
    popcornStatus: PopcornStatus,
    ticketPrice: TicketPrice
}

interface Decision {
    decision: 'yes' | 'no',
    reason: string
}

///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

/**
 * Calculates the movie suitability score.
 *
 * - Positive factors (high rating, friends available) increase the score.
 * - Negative factors (low rating, stale popcorn) decrease the score.
 * - The score is normalized to a range between 0 and 1.
 *
 * @param genre - Movie genre
 * @param rating - Movie rating (0-10)
 * @param friendsAvailable - Are friends available to watch?
 * @returns {number} - Normalized suitability score between 0 and 1.
 */
function calculateSuitability(genre: Genre, rating: Rating, friendsAvailable: FriendsAvailable): number {
    let negativeFactor = 0;
    let positiveFactor = 0;

    // Adjust based on genre and friends
    if (genre === 'comedy' && friendsAvailable) {
        positiveFactor += 3;
    } else if (genre === 'horror' && !friendsAvailable) {
        negativeFactor += 2;
    }

    // Adjust based on rating
    if (rating >= 8) {
        positiveFactor += 3;
    } else if (rating < 5) {
        negativeFactor += 3;
    }

    // Calculate final score
    const score = positiveFactor - negativeFactor;
    return (Math.max(0, score / 10));
};

/**
 * Determines whether the user should watch the movie today based on several factors.
 *
 * The decision is based on:
 * - Ticket price and popcorn status (hard constraints).
 * - Suitability score, which is computed using `calculateSuitability()` and
 *   depends on genre, rating, and friends availability.
 *
 * @param {DecisionFactors} decisionFactors - The factors influencing the movie decision
 * @returns {Decision} - Returns the decision 'yes' or 'no' and a relevant reason
 */
export function shouldIWatchMovie(decisionFactors: DecisionFactors): Decision {
    if (decisionFactors.ticketPrice > 20 || decisionFactors.popcornStatus === 'none') {
        return {
            decision: 'no',
            reason: 'bad conditions'
        };
    }

    const suitabilityScore = calculateSuitability(
        decisionFactors.genre,
        decisionFactors.rating,
        decisionFactors.friendsAvailable
    );
    if (suitabilityScore > 0.3) {
        return {
            decision: 'yes',
            reason: 'watch it'
        };
    }

    return {
        decision: 'no',
        reason: 'waste of time'
    };
}
