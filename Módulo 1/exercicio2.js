function pares(x, y) {
    if (x % 2 !== 0) {
        x++;
    }

    for (x; x <= y; x+=2) {
        console.log(x);
    }

}

pares(31, 321);