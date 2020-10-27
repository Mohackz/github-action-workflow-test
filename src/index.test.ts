import { sum } from "./index";

describe("function sum", () => {
	it("should add a & b and return the result", () => {
		let a: number = 4;
		let b: number = 2;
		let result: number = sum(4, 2);

		expect(result).toBe(6);
	});
});
