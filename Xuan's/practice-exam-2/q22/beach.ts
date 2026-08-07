///////////////////////////////////////////////////////////////////////////////
// Interfaces
///////////////////////////////////////////////////////////////////////////////

// The temperature in degrees Celsius.
type Temperature = number;
// The height of the waves in meters.
type WaveHeight = number;
type Weather = 'sunny' | 'cloudy' | 'rainy';
type Company = 'friends' | 'family' | 'alone';
type Budget = 'low' | 'medium' | 'high';

interface DecisionFactors {
    temperature: Temperature,
    waveHeight: WaveHeight,
    weather: Weather,
    company: Company,
    budget: Budget
}

interface Decision {
    decision: 'yes' | 'no',
    reason: string
}

///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

/**
 * Calculates the beach suitability score.
 *
 * - Positive factors (sunny weather, good waves) increase the score.
 * - Negative factors (rain, cold) decrease the score.
 * - The score is normalized to a range between 0 and 1.
 *
 * @param weather - Current weather condition
 * @param waveHeight - Height of waves in meters
 * @param company - Who you are going with
 * @returns {number} - Normalized suitability score between 0 and 1.
 */
function calculateSuitability(weather: Weather, waveHeight: WaveHeight, company: Company): number {
    let negativeFactor = 0;
    let positiveFactor = 0;

    // Adjust based on weather
    if (weather === 'sunny') {
        positiveFactor += 3;
    } else if (weather === 'cloudy') {
        positiveFactor += 1;
    } else if (weather === 'rainy') {
        negativeFactor += 5;
    }

    // Adjust based on waves
    if (waveHeight >= 1 && waveHeight <= 2) {
        positiveFactor += 2; // Perfect waves
    } else if (waveHeight > 3) {
        negativeFactor += 2; // Too dangerous
    }

    // Adjust based on company
    if (company === 'friends') {
        positiveFactor += 2;
    } else if (company === 'alone') {
        negativeFactor += 1;
    }

    // Calculate final score
    const score = positiveFactor - negativeFactor;
    return (Math.max(0, score / 10));
};

/**
 * Determines whether the user should go to the beach today based on several factors.
 *
 * The decision is based on:
 * - Temperature and budget (hard constraints).
 * - Suitability score, which is computed using `calculateSuitability()` and
 *   depends on weather, waves, and company.
 *
 * @param {DecisionFactors} decisionFactors - The factors influencing the beach decision
 * @returns {Decision} - Returns the decision 'yes' or 'no' and a relevant reason
 */
export function shouldIGoToTheBeach(decisionFactors: DecisionFactors): Decision {
    if (decisionFactors.temperature < 20 || decisionFactors.budget === 'low') {
        return {
            decision: 'no',
            reason: 'conditions not met'
        };
    }

    const suitabilityScore = calculateSuitability(
        decisionFactors.weather,
        decisionFactors.waveHeight,
        decisionFactors.company
    );
    if (suitabilityScore > 0.4) {
        return {
            decision: 'yes',
            reason: 'great day for beach'
        };
    }

    return {
        decision: 'no',
        reason: 'not worth it'
    };
}
