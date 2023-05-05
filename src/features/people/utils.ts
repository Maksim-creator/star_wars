export const findItemsIdByUrl = (items: string[]) =>
  items.map(item => +item.split('/').slice(-2)[0]);
