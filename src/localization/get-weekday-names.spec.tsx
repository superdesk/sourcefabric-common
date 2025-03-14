import {describe, it} from 'mocha';
import * as assert from 'assert';
import {getWeekdayNames} from './get-weekday-names';

describe('localization.get-weekday-names', () => {
    it('respects the index', () => {
        assert.deepEqual(
            getWeekdayNames('short', 0, 'en').map(({label}) => label),
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        );

        assert.deepEqual(
            getWeekdayNames('short', 1, 'en').map(({label}) => label),
            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        );

        assert.deepEqual(
            getWeekdayNames('short', 2, 'en').map(({label}) => label),
            ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        );
    });
});
