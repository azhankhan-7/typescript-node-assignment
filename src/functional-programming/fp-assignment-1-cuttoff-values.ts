/**
 * This function checks if the specified cutoffvalue is within cutoff
 * @param {number} cutOffvalue cutoff that we needed to check cutoffvalue
 * @returns boolean value if cutoffvalue falls under cutoff
 */

const createCutOff = (cutOffValue: number): ((number: number) => boolean) => {
  return (number: number): boolean => number < cutOffValue;
};
const cutOff = createCutOff(100);

// we can implement using if-else but try to avoid if it is single line
// if(number <=cutOffvalue){
//     return true;
// }
// return false;
// always go for shorthanded because function returns boolean and it
// can be written in single line using arrow functions

export {cutOff};
