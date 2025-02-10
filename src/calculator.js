function add(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

function premiumMultiply(a, b) {
    if (process.env.CALCULATOR_MODE !== 'premium') {
        throw new Error('Premium features not enabled');
    }
    if (!process.env.PREMIUM_API_KEY) {
        throw new Error('Premium API key not configured');
    }

    return a * b;
}

module.exports = { add, divide, premiumMultiply };

