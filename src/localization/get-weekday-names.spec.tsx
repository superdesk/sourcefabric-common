import {describe, it} from 'mocha';
import * as assert from 'assert';
import {getWeekdayNames} from './get-weekday-names';

describe('localization.get-weekday-names', () => {
    it('respects the index', () => {
        assert.deepEqual(
            getWeekdayNames(0, 'en').map(({nameShort}) => nameShort),
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
