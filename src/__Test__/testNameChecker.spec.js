import { checkForName } from "/src/client/js/nameChecker";

describe("url protocol", () => {
    test("it will return true", () => {
        const input = "https://www.facebook.com";
        expect(checkForName(input)).toBe(true);
    });
    test("it will return true", () => {
        const input = "http://www.facebook.com";
        expect(checkForName(input)).toBe(true);
    });
});

describe("no url protocol", () => {
    test("it will return true", () => {
        const input = "www.facebook.com";
        expect(checkForName(input)).toBe(true);
    });
    test("it will return true", () => {
        const input = "facebook.com";
        expect(checkForName(input)).toBe(true);
    });
    test("it will return false", () => {
        const input = "facebook . com";
        expect(checkForName(input)).toBe(false);
    });
});