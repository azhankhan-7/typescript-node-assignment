/**
 *This function will ilter all elements that start with mang or end with fy
 * @param {array} items array of string
 * @returns array of string that start with mang or end with fy
 */
function filterOutForAllElements(items: string[]): string[] {
  const newItems = items.filter(item => {
    const regEx = /^(mang)|(fy)$/gi;
    const result = item.match(regEx);
    return result;
  });
  return newItems;
}

export {filterOutForAllElements};
