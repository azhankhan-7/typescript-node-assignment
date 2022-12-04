import {transformArray} from './fp-assignment-2-transform-array';

describe('tranform array test', () => {
  test('check for tranform', () => {
    expect(
      transformArray([
        'CraftCode is a nice company',
        'We love CraftCode',
        'We are working in CraftCode',
        'Where is CraftCode?',
      ])
    ).toEqual([
      'CodeCraft is a nice company',
      'We love CodeCraft',
      'We are working in CodeCraft',
      'Where is CodeCraft?',
    ]);
  });
});
