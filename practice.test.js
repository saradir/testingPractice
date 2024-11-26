const practice = require('./practice')


// capitalize() tests
test('is a string', ()=>{
    expect(() => practice.capitalize(12)).toThrow();
});

test('first char is a letter', () =>{
    expect(practice.capitalize('string')).toBe('String');
});

test("first char isn't a letter", () =>{
    expect(practice.capitalize('1string')).toBe('1string')
});

test("already capitalized", () =>{
    expect(practice.capitalize('String')).toBe('String');
});


// reverseString() tests

test('is a string', ()=>{
    expect(() => practice.capitalize(12)).toThrow();
});

test('simple string', () => {
    expect(practice.reverseString('string')).toBe('gnirts');
});

test('complex string', () => {
    expect(practice.reverseString('this string is a bit more complicated, isn\'t it?')).toBe("?ti t'nsi ,detacilpmoc erom tib a si gnirts siht")
});


// calculator tests

test('invalid input', () =>{
    expect(() => practice.calculator.add(4,'d')).toThrow();
});

test('addition', () => {
    expect(practice.calculator.add(5,4)).toBe(9);
});

test('subtraction', () => {
    expect(practice.calculator.subtract(5, 7)).toBe(-2);
});

test('multiplication', () => {
    expect(practice.calculator.multiply(3, -10)).toBe(-30);
});

test('division by zero', () =>{
    expect(() => practice.calculator.divide(3,0)).toThrow();
});


// caesarCipher() tests

test('from z to a', () =>{
    expect(practice.caesarCipher('xyz',3)).toBe('abc');
});

test('case sensitive', () =>{
    expect(practice.caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('non-alphabetical char',() =>{
    expect(practice.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


// analyzeArray() tests

test('happy path', () =>{
    expect(practice.analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
         } 
    );
});

test('negatives', ()=>{
    expect(practice.analyzeArray([10, -5, 0, 7])).toEqual(
        { average: 3, min: -5, max: 10, length: 4 });
        });


test('empty array', ()=>{
    expect(() => practice.analyzeArray([])).toThrow();
        });     


test('non numbers', ()=>{
    expect(() => practice.analyzeArray(["a", 1, 2])).toThrow();
        });     
