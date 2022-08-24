/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {

  if (!obj) return undefined;

  const resultObj = {};

  const newObj = new Map(Object.entries(obj));

  newObj.forEach((value, key) => {
    resultObj[`${value}`] = `${key}`;
  });

  return resultObj;

}
