export function filter<T extends { [key: string]: string }>(
  data: readonly T[] = [],
  filterableKeys: Set<string> = new Set(),
  searchRegex: RegExp = new RegExp("")
) {
  return data.filter((item) => {
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        if (filterableKeys.has(key) && searchRegex.test(value)) {
          return true;
        }
      }
    }
    return false;
  });
}
