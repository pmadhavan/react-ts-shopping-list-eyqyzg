import * as React from 'react';

interface ShoppingItemProps {
  item: string;
  index: number;
  onDelete: (item: string, index: number) => void;
}
export const ShoppingItem = ({ item, index, onDelete }: ShoppingItemProps) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div
      key={item + index}
      className={`shopping_item ${isChecked ? 'greyed' : undefined}`}
    >
      <label>
        <input
          type="checkbox"
          name="shopping-item"
          onChange={handleChange}
        ></input>
        {item}
      </label>
      <button onClick={() => onDelete(item, index)}>Delete</button>
    </div>
  );
};
