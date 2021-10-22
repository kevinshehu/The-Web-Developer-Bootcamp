function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 50, 60);