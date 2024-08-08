
import '@testing-library/jest-dom/extend-expect';

// Mock компонентов
jest.mock('../UI/DropdownMenu/DropdownMenu', () => ({ options, onSelect }: { options: Array<{logo: string, name: string}>, onSelect: (option: {logo: string, name: string}) => void }) => (
  <div>
    Mocked DropdownMenu
    <button onClick={() => onSelect(options[0])}>Select</button>
  </div>
));

jest.mock('../UI/Button/MyButton', () => ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
  <button onClick={onClick}>{children}</button>
));

jest.mock('../UI/SearchInput/MySearchInput', () => ({ placeholder }: { icon: string, placeholder: string }) => (
  <div>
    Mocked MySearchInput: <input placeholder={placeholder} />
  </div>
));

jest.mock('../Modal/Modal', () => ({ title, onClose, children }: { title: string, onClose: () => void, children: React.ReactNode }) => (
  <div>
    Mocked Modal: {title}
    <button onClick={onClose}>Close</button>
    {children}
  </div>
));
