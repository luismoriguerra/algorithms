

export function randomInt(start , before) {
    return start + Math.floor(Math.random() * (before - start));
}

for (let index = 0; index < 10; index++) {
    console.log(randomInt(25, 75));
}

