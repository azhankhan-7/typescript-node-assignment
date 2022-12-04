import {filterOutNot4} from './fp-assignment-3-filter-out-all-lines';

describe('check for filter  test', () => {
  test(' filterout all lines not containing 4', () => {
    expect(filterOutNot4()).toEqual(['items qty', 'mango 60', 'onion 41', 'water 20']);
  });
});
