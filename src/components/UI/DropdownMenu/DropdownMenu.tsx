import React, { useState } from 'react';
import styles from './DropdownMenu.module.scss';

interface DropdownMenuProps {
  onSelect: (value: string) => void;
  options: OptionsType[];
}

interface OptionsType {
  logo: string,
  name: string
}
// Компонент выпадающего меню
const DropdownMenu: React.FC<DropdownMenuProps> = ({ onSelect, options }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange} className={styles.select}>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.logo}&emsp;{option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
