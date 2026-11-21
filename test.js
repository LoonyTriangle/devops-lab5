const assert = require('assert');
const { sum } = require('./math');

assert.strictEqual(sum(5, 3), 8);
assert.strictEqual(sum(-1, 1), 0);

console.log('All tests passed');
