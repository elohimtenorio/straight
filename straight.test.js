var assert = require('assert');
var straight = require('./straight');

describe('Straight test cases', () => {
	describe('Consecutive test cases',()=>{
		it('should be consecutive', () => {
			assert.strictEqual(straight.isConsecutive(5,6),true);
			assert.strictEqual(straight.isConsecutive(14,2),true);
			assert.strictEqual(straight.isConsecutive(13,14),true);
		});
		it('should not be consecutive', () => {
			assert.notStrictEqual(straight.isConsecutive(5,9),true);
			assert.notStrictEqual(straight.isConsecutive(12,14),true);
			assert.notStrictEqual(straight.isConsecutive(4,3),true);
		});

	});
	describe('Stright test cases',()=>{
		it('should be an array', () => {
			assert.notEqual(straight.isStraight(undefined),true);
			assert.notEqual(straight.isStraight('Some text'),true);
			assert.notEqual(straight.isStraight(1),true);
			assert.notEqual(straight.isStraight({}),true);
		});
		it('should has less than 8 cards', () => {
			assert.notEqual(straight.isStraight([7, 7, 12 ,11, 3, 4, 14,14]),true);
		});
		it('should has some card', () => {
			assert.notEqual(straight.isStraight([]),true);
		});
		it('should has valid cards', () => {
			assert.notEqual(straight.validate([2, 3, 4 ,5, 6, 15]),true);
			assert.equal(straight.validate([2, 3, 4 ,5, 6]),true);
			assert.equal(straight.validate([14, 5, 4 ,2, 3]),true);
		});
		it('should be straight', () => {
			assert.equal(straight.isStraight([2, 3, 4 ,5, 6]),true);
			assert.equal(straight.isStraight([14, 5, 4 ,2, 3]),true);
		});
		it('should not be straight', () => {
			assert.notEqual(straight.isStraight([7, 7, 12 ,11, 3, 4, 14]),true);
			assert.notEqual(straight.isStraight([7,3,3]),true);
		});

	});
});