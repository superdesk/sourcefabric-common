import * as React from 'react';
import {describe, it} from 'mocha';
import * as assert from 'assert';
import {isSpacerTreeEmpty, Spacer} from './spacer';

describe('isSpacerTreeEmpty', () => {
    it('detects empty', () => {
        const result = (
            <Spacer v gap="4">
                {null}

                <Spacer v gap="4">
                    {null}
                    {null}
                </Spacer>

                {false && <div>abc</div>}
            </Spacer>
        );

        assert.equal(isSpacerTreeEmpty(result), true);
    });

    it('detects non-empty', () => {
        const result = (
            <Spacer v gap="4">
                {null}

                <div />
            </Spacer>
        );

        assert.equal(isSpacerTreeEmpty(result), false);
    });

    it('detects non-empty deep', () => {
        const result = (
            <Spacer v gap="4">
                {null}

                <Spacer v gap="4">
                    {null}

                    <div />
                </Spacer>
            </Spacer>
        );

        assert.equal(isSpacerTreeEmpty(result), false);
    });
});
