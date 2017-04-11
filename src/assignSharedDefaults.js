export default function(collection, defaults) {
  return collection.map(el => {
    return { ...el, ...defaults };
  });
}
