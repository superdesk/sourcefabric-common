import {describe, it} from 'mocha';
import * as assert from 'assert';
import {getWeekdayNames} from './get-weekday-names';

describe('localization.get-weekday-names', () => {
    it('respects the index', () => {
        assert.deepEqual(
            getWeekdayNames('short', 0, 'en').map(({label}) => label),
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        );
    });
});
