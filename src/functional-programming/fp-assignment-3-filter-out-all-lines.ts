const purchases: string = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;

const newPurchases = purchases.split('\n');

const filterOutNot4 = (): string[] => {
  return newPurchases
    .filter(item => !item.includes('4')) // checks whether 4 is present or not and it should take boolean value
    .map(item => {
      // now add 10 to second index
      const newItem = item.split(' ');
      const firstIndex = newItem[0];
      const secondIndex = newItem[1];
      const value = parseInt(secondIndex, 10);
      // since secondindex is an string, we use parseInt to convert it into number

      if (Number.isNaN(value)) {
        // check if the second index is string or not
        return `${firstIndex} ${secondIndex}`;
      }
      return `${firstIndex} ${value + 10}`;
    });
};
console.log(filterOutNot4());

export {filterOutNot4};
