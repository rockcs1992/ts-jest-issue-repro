import { testFunc } from "../src/index";

describe("Test", () => {
    it("should execute test", () => {
        expect(testFunc()).toBe(2);
    });
});