import {filterOut} from './fp-assignment-4-filter-out-all-string';

describe('check for filter test', () => {
  test("filter out all strings that contain  either 'u' or 'g'", () => {
    expect(filterOut(['browl', 'faaast', 'energy', 'stand', 'eat', 'lunch'])).toEqual(['energy', 'lunch']);
  });
});
