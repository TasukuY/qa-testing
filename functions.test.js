const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions');

test("should return 2", () => {
    // expect(returnTwo()).toBe(2);
    expect(typeof returnTwo()).toBe('number');
});

test("should return Hello, James.", () => {
    // expect(greeting("Jill")).toBe("Hello, Jill");
    // expect(greeting("James")).toBe("Hello, James");
    expect(greeting("Jill")).not.toBe("Hello, James");
});

describe("Math functions", () => {
    test("should return the sum of two numbers", () => {
        // expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    });

    test("should return the subtraction of two numbers", () => {
        // expect(subtract(2, 1)).toBe(1);
        expect(subtract(5, 1)).toBe(4);
    });

    test("should return the mulitplication of two numbers", () => {
        // expect(multiply(1, 2)).toBe(2);
        expect(multiply(5, 9)).toBe(45);
    });

    test("should return the division of two numbers", () => {
        // expect(divide(12, 4)).toBe(3);
        expect(divide(4, 2)).toBe(2);
    });
  });