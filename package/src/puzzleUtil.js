const sleep = milliseconds =>
    new Promise(resolve => setTimeout(resolve, milliseconds));

const manhattanCost = (goalArr, curArr) => {
    let count = 0;

    for (let i = 0; i < curArr.length; i++) {
        for (let j = 0; j < curArr[i].length; j++) {
            if (curArr[i][j] !== goalArr[i][j] && curArr[i][j] !== '') {
                for (let k = 0; k < goalArr.length; k++) {
                    for (let f = 0; f < goalArr[k].length; f++) {
                        if (goalArr[k][f] === curArr[i][j]) {
                            count += Math.abs(k - i) + Math.abs(f - j);
                        }
                    }
                }
            }
        }
    }
    return count;
};

const moves = ['up', 'down', 'left', 'right'];

const moveUp = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.y - 1 >= 0 &&
        curArr[blankElement.y - 1][blankElement.x] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y - 1][blankElement.x];
        newCurArr[blankElement.y - 1][blankElement.x] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveDown = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.y + 1 < curArr.length &&
        curArr[blankElement.y + 1][blankElement.x] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y + 1][blankElement.x];
        newCurArr[blankElement.y + 1][blankElement.x] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveLeft = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.x - 1 >= 0 &&
        curArr[blankElement.y][blankElement.x - 1] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y][blankElement.x - 1];
        newCurArr[blankElement.y][blankElement.x - 1] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveRight = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.x + 1 < curArr[blankElement.y].length &&
        curArr[blankElement.y][blankElement.x + 1] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y][blankElement.x + 1];
        newCurArr[blankElement.y][blankElement.x + 1] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

export { sleep, manhattanCost, moves, moveUp, moveDown, moveLeft, moveRight };
