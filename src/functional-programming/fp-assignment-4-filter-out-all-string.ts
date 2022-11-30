/**
 *This function will filter out array of all strings that contain  either ‘u’ or ‘g
 * @param {array} items array of string
 * @returns array of all strings that containing  either ‘u’ or ‘g
 */

function filterOut(items: string[]): string[] {
  const newItems = items.filter(item => {
    const regEx = /(u)|(g)/gi;
    const result = item.match(regEx);
    return result;
  });
  return newItems;
}
export {filterOut};
