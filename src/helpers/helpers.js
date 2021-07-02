export const getUniqueValues = (array) => {
  let uniqueArray = [];
  array.forEach((e) => {
    if (!uniqueArray.includes(e)) {
      uniqueArray = [...uniqueArray, e];
    }
  });
  return uniqueArray;
};
