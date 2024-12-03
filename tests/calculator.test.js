const { appendNumber, setOperator, calculate, clearDisplay } = require('../src/app');

let displayMock;

beforeEach(() => {
    displayMock = { value: '' };
    global.document = {
        getElementById: jest.fn(() => displayMock),
    };
    clearDisplay();
});

test('adds 1 + 2 to equal 3', () => {
    appendNumber('1');
    setOperator('+');
    appendNumber('2');
    expect(calculate()).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    appendNumber('5');
    setOperator('-');
    appendNumber('3');
    expect(calculate()).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
    appendNumber('4');
    setOperator('*');
    appendNumber('3');
    expect(calculate()).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    appendNumber('10');
    setOperator('/');
    appendNumber('2');
    expect(calculate()).toBe(5);
});

test('dividing by zero throws error', () => {
    appendNumber('10');
    setOperator('/');
    appendNumber('0');
    expect(() => calculate()).toThrow('Cannot divide by zero');
});
