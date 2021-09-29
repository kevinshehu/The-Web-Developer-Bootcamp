function allEvens(arrayNumbers) {
    if (arrayNumbers.every(temp => temp % 2 == 0))
        return true;
    return false;
}