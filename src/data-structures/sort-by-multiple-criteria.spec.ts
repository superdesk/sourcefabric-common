import {it} from 'mocha';
import {strict as assert} from 'assert';
import {sortByMultipleCriteria} from './sort-by-multiple-criteria';

it('can sort by multiple criteria', () => {
    assert.deepEqual(
        sortByMultipleCriteria(
            [
                {name: 'b', score: 15},
                {name: 'c', score: 10},
                {name: 'c', score: 5},
                {name: 'c', score: 15},
                {name: 'a', score: 10},
                {name: 'a', score: 5},
                {name: 'a', score: 15},
                {name: 'b', score: 10},
                {name: 'b', score: 5},
            ],
            (a, b) => a.name.localeCompare(b.name),
            (a, b) => {
                if (a.score < b.score) {
                    return -1;
                }
                if (a.score > b.score) {
                    return 1;
                } else {
                    return 0;
                }
            },
        ),

        [
            {name: 'a', score: 5},
            {name: 'a', score: 10},
            {name: 'a', score: 15},
            {name: 'b', score: 5},
            {name: 'b', score: 10},
            {name: 'b', score: 15},
            {name: 'c', score: 5},
            {name: 'c', score: 10},
            {name: 'c', score: 15},
        ],
    );
});
