/**
 * This function tranforms specified array of string for each item
 * @param {array} string array of string
 * @returns tranforms CraftCode to CodeCraft
 */
function transformArray(strings: string[]): string[] {
  const newString = strings.map((string: string) => string.replace(/CraftCode/g, 'CodeCraft'));
  return newString;
}

export {transformArray};
