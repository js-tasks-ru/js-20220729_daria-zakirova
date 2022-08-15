/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let fieldsArray = [...fields];
  let newObj = Object.fromEntries(
    fieldsArray.filter((key) => key in obj).map((key) => [key, obj[key]])
  );

  return newObj;
};
