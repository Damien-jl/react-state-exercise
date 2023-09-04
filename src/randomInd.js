function pick(array) {
    const rand = Math.floor(Math.random() * array.length);
    return array[rand];
}

export {pick};