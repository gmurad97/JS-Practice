/* function generateRandomInput() {
    const types = ['string', 'number', 'boolean', 'object', 'undefined', 'function'];
    const randomType = types[Math.floor(Math.random() * types.length)];

    switch (randomType) {
        case 'string':
            return Math.random().toString(36).substring(7);
        case 'number':
            return Math.random() * 100;
        case 'boolean':
            return Math.random() < 0.5;
        case 'object':
            return { key: Math.random().toString(36).substring(7) };
        case 'undefined':
            return undefined;
        case 'function':
            return function() { return "I am a function"; };
    }
} */