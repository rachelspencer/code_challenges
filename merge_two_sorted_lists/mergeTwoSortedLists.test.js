const mergeTwoLists = require('./mergeTwoSortedLists')

describe('mergeTwoLists', () => {
    test('should return merged sorted lists or an empty array', () => {
        expect(mergeTwoLists([1,2,4],[1,3,4])).toStrictEqual([1,1,2,3,4,4]);
        expect(mergeTwoLists([], [])).toStrictEqual([]);
        expect(mergeTwoLists([], [0])).toStrictEqual([0]);
        expect(mergeTwoLists([10, 2, 3], [])).toStrictEqual([2, 3, 10]);
        expect(mergeTwoLists([], [9, 5, 12])).toStrictEqual([5, 9, 12]);
        expect(mergeTwoLists([10,1,6,5,0], [100,50,5])).toStrictEqual([0,1,5,5,6,10,50,100]);

        expect(mergeTwoLists([], [2, 3])).toStrictEqual([2, 3]); // Test empty list1
        expect(mergeTwoLists([1, 2], [])).toStrictEqual([1, 2]);
    });
});
