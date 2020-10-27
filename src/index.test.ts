import { sum } from "./modules/maths";

describe("function sum", () => {
	it("should add 4 & 2 and return 6", () => {
		let result = sum(4, 2);

		expect(result).toBe(6);
	});

	it("should add 6 & 10 and return 16", () => {
		let result = sum(6, 10);

		expect(result).toBe(16);
	});
});
