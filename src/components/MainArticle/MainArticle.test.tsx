import '@testing-library/jest-dom/extend-expect';

// Mock компонентов
jest.mock('../UI/SearchInput/MySearchInput', () => ({ 
  placeholder, 
  value, 
  setValue 
}: { 
  icon: React.ReactNode; 
  placeholder: string; 
  value: string; 
  setValue: (value: string) => void 
}) => (
  <div>
    Mocked MySearchInput: <input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  </div>
));

