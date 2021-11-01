class Color {
	// CONSTRUCTOR
	constructor(r, g, b, a, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}

	greet() {
		console.log(`Hello ${this.name}!`);
	}

	rgb() {
		// this keyword is a must
		return `rgb(${this.r}, ${this.g}, ${this.b})`;
	}

	rgba(a) {
		return `rgb(${r}, ${g}, ${b}, ${a})`;
	}
}

const c1 = new Color(25, 100, 30, 'kevin');