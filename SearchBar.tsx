import * as React from 'react';
import { useData } from './useData';

interface DropdownProps {
  searchResults: string[];
  onSelect: (item: string) => void;
}
const DropDown = ({ searchResults, onSelect }: DropdownProps) => {
  return (
    <div className="dropdown" role="listbox" tabIndex={0}>
      {searchResults.length > 0 &&
        searchResults.map((result) => {
          return (
            <div
              role="option"
              onClick={() => onSelect(result)}
              className="item"
              key={result}
            >
              {result}
            </div>
          );
        })}
    </div>
  );
};
export const SearchBar = ({ onSelect }: Pick<DropdownProps, 'onSelect'>) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { results } = useData(
    `https://api.frontendeval.com/fake/food/`,
    searchQuery
  );
  return (
    <div className="search_container">
      <label>Search Items:</label>
      <input
        className="search_bar"
        type="text"
        name="search_bar"
        placeholder="Apples"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.trim())}
      ></input>
      <DropDown searchResults={results} onSelect={onSelect} />
    </div>
  );
};
