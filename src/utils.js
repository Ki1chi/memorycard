export function shuffleObject(obj) {
    const keys = Object.keys(obj);

    for(let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }

    const shuffledObject = {};
    keys.forEach((key) => {
        shuffledObject[key] = obj[key];
    })
    return shuffledObject
}