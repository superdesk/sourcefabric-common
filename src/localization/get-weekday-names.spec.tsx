import {describe, it} from 'mocha';
import * as assert from 'assert';
import {getWeekdayNames} from './get-weekday-names';

describe('localization.get-weekday-names', () => {
    it('respects the index', () => {
        assert.deepEqual(
            getWeekdayNames(0, 'en').map(({nameShort, index}) => ({nameShort, index})),
            [
                {nameShort: 'Sun', index: 0},
                {nameShort: 'Mon', index: 1},
                {nameShort: 'Tue', index: 2},
                {nameShort: 'Wed', index: 3},
                {nameShort: 'Thu', index: 4},
                {nameShort: 'Fri', index: 5},
                {nameShort: 'Sat', index: 6},
            ],
        );

        assert.deepEqual(
            getWeekdayNames(1, 'en').map(({nameShort}) => nameShort),
            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        );

        assert.deepEqual(
            getWeekdayNames(2, 'en').map(({nameShort}) => nameShort),
            ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        );
    });
});
