///////////////////////////////////////////////////////////////////////////////
// Interfaces
///////////////////////////////////////////////////////////////////////////////

// The temperature in degrees Celsius.
type Temperature = number;
// The sweetness level from 1-10.
type SweetnessLevel = number;
type Weather = 'sunny' | 'cloudy' | 'rainy';
type Mood = 'happy' | 'sad' | 'neutral';
type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

interface DecisionFactors {
    temperature: Temperature,
    sweetnessLevel: SweetnessLevel,
    weather: Weather,
    mood: Mood,
    timeOfDay: TimeOfDay
}

interface Decision {
    decision: 'yes' | 'no',
    reason: string
}

///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

/**
 * Calculates the ice cream suitability score.
 *
 * - Positive factors (sunny weather, good mood) increase the score.
 * - Negative factors (rain, late night) decrease the score.
 * - The score is normalized to a range between 0 and 1.
 *
 * @param weather - Current weather condition
 * @param mood - Current mood
 * @param timeOfDay - Current time of day
 * @returns {number} - Normalized suitability score between 0 and 1.
 */
function calculateSuitability(weather: Weather, mood: Mood, timeOfDay: TimeOfDay): number {
    let negativeFactor = 0;
    let positiveFactor = 0;

    // Adjust based on weather
    if (weather === 'sunny') {
        positiveFactor += 3;
    } else if (weather === 'cloudy') {
        positiveFactor += 1;
    } else if (weather === 'rainy') {
        negativeFactor += 2;
    }

    // Adjust based on mood
    if (mood === 'happy') {
        positiveFactor += 2;
    } else if (mood === 'sad') {
        positiveFactor += 3; // Ice cream makes you feel better!
    } else if (mood === 'neutral') {
        positiveFactor += 1;
    }

    // Adjust based on time of day
    if (timeOfDay === 'afternoon') {
        positiveFactor += 2; // Perfect time
    } else if (timeOfDay === 'night') {
        negativeFactor += 3; // Too late
    } else if (timeOfDay === 'morning') {
        negativeFactor += 1; // A bit early
    }

    // Calculate final score
    const score = positiveFactor - negativeFactor;
    return (Math.max(0, score / 10));
};

/**
 * Determines whether the user should get ice cream today based on several factors.
 *
 * The decision is based on:
 * - Temperature and sweetness level (hard constraints).
 * - Suitability score, which is computed using `calculateSuitability()` and
 *   depends on weather, mood, and time of day.
 *
 * @param {DecisionFactors} decisionFactors - The factors influencing the ice cream decision
 * @returns {Decision} - Returns the decision 'yes' or 'no' and a relevant reason
 */
export function shouldIGetIceCream(decisionFactors: DecisionFactors): Decision {
    if (decisionFactors.temperature < 15 || decisionFactors.sweetnessLevel > 8) {
        return {
            decision: 'no',
            reason: 'conditions not met'
        };
    }

    const suitabilityScore = calculateSuitability(
        decisionFactors.weather,
        decisionFactors.mood,
        decisionFactors.timeOfDay
    );
    if (suitabilityScore > 0.5) {
        return {
            decision: 'yes',
            reason: 'perfect time for ice cream'
        };
    }

    return {
        decision: 'no',
        reason: 'not worth it'
    };
}
