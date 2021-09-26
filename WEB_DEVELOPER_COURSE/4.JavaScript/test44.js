function returnDay(x) {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (x > 7 || x <= 0)
        return null;

    return week[x - 1];
}