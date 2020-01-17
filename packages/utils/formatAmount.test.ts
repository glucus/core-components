import { splitAmount } from './formatAmount';

test('Split test for amount length < splitFrom (5 default)', () => {
    expect(splitAmount('100')).toBe('100');
    expect(splitAmount('1000')).toBe('1000');
})

test('Split test for amount length >= splitFrom (5 default)', () => {
    expect(splitAmount('10000')).toBe('10 000');
    expect(splitAmount('100000')).toBe('100 000');
    expect(splitAmount('1000000')).toBe('1 000 000');
    expect(splitAmount('10000000')).toBe('10 000 000');
})