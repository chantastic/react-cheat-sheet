import { filter, includes } from "lodash";

const filterByCategory = (_data, categories = []) =>
  categories.length
    ? filter(_data, ({ category }) => includes(categories, category))
    : _data;

export default filterByCategory;
