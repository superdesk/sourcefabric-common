import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mergeSets} from './merge-sets';

describe('utils.merge-sets', () => {
    it('can merge sets', () => {
        const set1 = new Set(['a', 'b']);
        const set2 = new Set(['c', 'd']);

        const merged = mergeSets(set1, set2);

        assert.equal(merged instanceof Set, true);
        assert.deepEqual(Array.from(merged), ['a', 'b', 'c', 'd']);
    });
});
