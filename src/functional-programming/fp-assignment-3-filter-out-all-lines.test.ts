import {filterOutNot4} from './fp-assignment-3-filter-out-all-lines';

describe('filterout all lines not containing 4 test', () => {
  test('check for filter test', () => {
    expect(filterOutNot4()).toEqual(['items qty', 'mango 60', 'onion 41', 'water 20']);
  });
});
