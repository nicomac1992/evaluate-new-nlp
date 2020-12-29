import { TestScheduler } from "jest";
import { scoreTags } from "../src/client/js/formHandler";

describe("test score levels", () => {
    test("it should return true", () => {
        const score_tag = "P+" || "P";
        expect(scoreTags(score_tag)).toBe("Positive");
    });
    test("it should return true", () => {
        const score_tag = "NEU";
        expect(scoreTags(score_tag)).toBe("Neutral");
    });
    test("it should return true", () => {
        const score_tag = "N+" || "N";
        expect(scoreTags(score_tag)).toBe("Negative");
    });
    test("it should return true", () => {
        const score_tag = "NONE";
        expect(scoreTags(score_tag)).toBe("Non Sentimental");
    });
})