import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import Modal from '../Modal/Modal';
import MySearchInput from '../UI/SearchInput/MySearchInput';

// Mock компонентов
jest.mock('../UI/Navigation/Navigation', () => () => <div>Mocked Navigation</div>);
jest.mock('../UI/DropdownMenu/DropdownMenu', () => ({ options, onSelect }) => (
  <div>
    Mocked DropdownMenu
    <button onClick={() => onSelect(options[0])}>Select</button>
  </div>
));
jest.mock('../UI/Button/MyButton', () => ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
));
jest.mock('../UI/SearchInput/MySearchInput', () => ({ icon, placeholder }) => (
  <div>
    Mocked MySearchInput: <input placeholder={placeholder} />
  </div>
));
jest.mock('../Modal/Modal', () => ({ title, onClose, children }) => (
  <div>
    Mocked Modal: {title}
    <button onClick={onClose}>Close</button>
    {children}
  </div>
));

// Тесты
describe('Header Component', () => {
  test('renders Header component', () => {
    render(<Header />);
    expect(screen.getByText('Mocked Navigation')).toBeInTheDocument();
    expect(screen.getByText('Jobpilot')).toBeInTheDocument();
    expect(screen.getByText('Mocked MySearchInput:')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Post a Jobs')).toBeInTheDocument();
  });

  test('opens and closes modal when Post a Jobs button is clicked', () => {
    render(<Header />);
    const postJobsButton = screen.getByText('Post a Jobs');
    fireEvent.click(postJobsButton);
    expect(screen.getByText('Mocked Modal: Post Your Job')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Mocked Modal: Post Your Job')).not.toBeInTheDocument();
  });
});
