function print_n_times(string, times) {
    let result = "";

    for (let i = 0; i < times; i++) {
        result += string;
    }

    return result;
}

console.log(print_n_times('Test ', 200));