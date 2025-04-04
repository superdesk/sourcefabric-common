import {describe, it} from 'mocha';
import * as assert from 'assert';
import {formatTime} from './format-time';

describe('localization.formatTime', () => {
    it('includes seconds', () => {
        assert.equal(formatTime('13:40:50', 'en-GB'), '13:40:50');
    });

    it('does not include seconds', () => {
        assert.equal(formatTime('13:40', 'en-GB'), '13:40');
    });

    it('respects locale', () => {
        assert.equal(formatTime('13:40', 'en-US'), '1:40 PM');
    });
});
