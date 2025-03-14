import {describe, it} from 'mocha';
import * as assert from 'assert';
import {buildCalendarForMonth} from './build-calendar-for-month';

describe('dates.buildCalendarForMonth', () => {
    it('handles a usual month where month start/end does not match week start/end', () => {
        assert.deepEqual(
            buildCalendarForMonth(new Date('1970-04-01'), {weekStartsOn: 0, code: 'en'}).weeks.map((days) => {
                return days.map(({day}) => day.toString().padStart(2, '0')); // using padStart for readability
            }),
            [
                ['29', '30', '31', '01', '02', '03', '04'],
                ['05', '06', '07', '08', '09', '10', '11'],
                ['12', '13', '14', '15', '16', '17', '18'],
                ['19', '20', '21', '22', '23', '24', '25'],
                ['26', '27', '28', '29', '30', '01', '02'],
            ],
        );
    });

    it('handles a month starting on Monday and ending on Friday', () => {
        assert.deepEqual(
            buildCalendarForMonth(new Date('1970-02-01'), {weekStartsOn: 0, code: 'en'}).weeks.map((days) => {
                return days.map(({day}) => day.toString().padStart(2, '0')); // using padStart for readability
            }),
            [
                ['01', '02', '03', '04', '05', '06', '07'],
                ['08', '09', '10', '11', '12', '13', '14'],
                ['15', '16', '17', '18', '19', '20', '21'],
                ['22', '23', '24', '25', '26', '27', '28'],
            ],
        );
    });
});
