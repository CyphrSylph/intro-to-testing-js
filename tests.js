// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('foo', function() {
    it('should return true if 2 === 2', function() {
    let expectedResult = 2;
    let actualResult = 2;
        expect(actualResult).toBe(expectedResult);
    });
});

// EXERCISE 1
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function')
    });
// EXERCISE 2
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
// EXERCISE 3
    it('should return "Hello, Jane!" when passed the input "Jane"', function () {
       expect(sayHello('Jane')).toBe('Hello, Jane!')
    });
// EXERCISE 4
    it('should return "Hello, Alex!" when passed the input "Alex"', function () {
       expect(sayHello('Alex')).toBe('Hello, Alex!')
   });
// EXERCISE 5
    it('should return "Hello, Pat!" when passed the input "Pat"', function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!")
    });
// EXERCISE 8
    it('should return "Hello, World!" when passed the input "World"', function () {
        expect(sayHello('World')).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the boolean is true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the boolean is false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the input is null', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the input is an empty string " "', function () {
        expect(sayHello('')).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the input is a number', function () {
        expect(sayHello(Number)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the input is a number in a string', function () {
        expect(sayHello(Number)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if the input is an array', function () {
        expect(sayHello([])).toBe("Hello, World!")
    });
});
// EXERCISE 10
describe('isFive', function () {
    it('should be a defined function', function () {
       expect(typeof(isFive)).toBe("function")
    });
    it('should return boolean not matter the input', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when passed "5"', function () {
        expect(isFive('5')).toBe(true)
    });
});
// EXERCISE 11
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof(isEven)).toBe("function")
    });
    it('returns a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('returns true when executed with "isEven(2)"', function () {
        expect(isEven(2)).toBe(true)
    });
    it('returns true when executed with "isEven(-4)"', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('returns false when executed with "isEven(3)"', function () {
        expect(isEven(3)).toBe(false)
    });
    it('returns false when called with "isEven("banana")"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('returns true when called with "isEven("8")"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('returns false when called with "isEven(Infinity)"', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('return false when called with a boolean input like "isEven(true)"', function () {
        expect(isEven(true)).toBe(false)
    });
    it('return false when called with a boolean input like "isEven(false)"', function () {
        expect(isEven(false)).toBe(false)
    });
    it('returns false when called without an argument like "isEven()"', function () {
        expect(isEven()).toBe(false)
    });
})
// EXERCISE 12
describe('isVowel', function () {
    it('should be a defined function',function () {
        expect(typeof(isVowel)).toBe("function")
    });
    it('always returns a boolean', function () {
        expect(typeof (isVowel())).toBe("boolean")
    });
    it('returns true when passed the input "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('returns true when passed the input "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('returns false when passed the input "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('returns false when passed the input 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('returns false when passed the input true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('returns false when passed the input false', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('returns false when passed the input "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('returns false when passed a blank input', function () {
        expect(isVowel()).toBe(false)
    });
})


