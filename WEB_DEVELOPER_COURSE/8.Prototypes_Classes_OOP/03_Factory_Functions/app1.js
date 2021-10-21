function makeColor(r, g, b) {
    // create new object
    const color = {};

    // PASS EACH VALUE
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        //PASS r, g, b
        const { r, g, b } = this;

        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        //PASS r, g, b
        const { r, g, b } = this;

        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    return color;
}

const myColor = makeColor(25, 240, 39);
myColor.rgb();