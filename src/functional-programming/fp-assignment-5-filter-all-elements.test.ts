import {filterOutForAllElements} from './fp-assignment-5-filter-all-elements';

describe('check for filter test', () => {
  test(' filter all elements that start with mang or end with fy', () => {
    expect(
      filterOutForAllElements(['mangalore', 'semangin', '2 lonely', 'verify', 'rectify', 'mangala', 'notifyy'])
    ).toEqual(['mangalore', 'verify', 'rectify', 'mangala']);
  });
});
