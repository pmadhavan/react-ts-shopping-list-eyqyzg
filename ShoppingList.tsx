import * as React from 'react';
import { SearchBar } from './SearchBar';
import { ShoppingItem } from './ShoppingItem';
export const ShoppingList = () => {
  const [list, setList] = React.useState<string[]>([]);

  const handleItemSelection = React.useCallback((item: string) => {
    setList([...list, item]);
  },[list]);

  const onDelete = React.useCallback(
    (item: string, index: number) => {
      const updatedList = list.filter(
        (itemInList, indexInList) => index !== indexInList
      );
      setList(updatedList);
    },
    [list]
  );
  return (
    <div>
      <h2>Shopping List</h2>
      <SearchBar onSelect={handleItemSelection} />
      <ul>
        {list &&
          list.map((item, index) => {
            return (
              <ShoppingItem item={item} index={index} onDelete={onDelete} />
            );
          })}
      </ul>
    </div>
  );
};
