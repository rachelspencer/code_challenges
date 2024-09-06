const createPhoneNumber = require('./make_phone_number');

describe('createPhoneNumber', () => {
    test('should return numbers formatted into a phone number', () => {
        expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe("(123) 456-7890");
    });
});