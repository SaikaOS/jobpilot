import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainArticle from './MainArticle';

// Mock компонентов
jest.mock('../UI/SearchInput/MySearchInput', () => ({ icon, placeholder, value, setValue }) => (
  <div>
    Mocked MySearchInput: <input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  </div>
));
jest.mock('../UI/Button/MyButton', () => ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
));
jest.mock('../StatsBoxes/StatsBoxes', () => () => <div>Mocked StatsBoxes</div>);

describe('MainArticle Component', () => {
  test('renders MainArticle component', () => {
    render(<MainArticle />);
    expect(screen.getByText('Find a job that suits your interest & skills.')).toBeInTheDocument();
    expect(screen.getByText('Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.')).toBeInTheDocument();
    expect(screen.getByText('Mocked MySearchInput:')).toBeInTheDocument();
    expect(screen.getByText('Find Job')).toBeInTheDocument();
    expect(screen.getByText('Suggestion: Designer, Programming, Digital Marketing, Video, Animation')).toBeInTheDocument();
    expect(screen.getByText('Mocked StatsBoxes')).toBeInTheDocument();
  });

  test('updates jobTitle and location inputs', () => {
    render(<MainArticle />);
    const jobTitleInput = screen.getByPlaceholderText('Job title, Keyword...');
    const locationInput = screen.getByPlaceholderText('Your Location');
    
    fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(locationInput, { target: { value: 'New York' } });
    
    expect(jobTitleInput).toHaveValue('Software Engineer');
    expect(locationInput).toHaveValue('New York');
  });

  test('calls onClick with jobTitle and location', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<MainArticle />);
    
    const jobTitleInput = screen.getByPlaceholderText('Job title, Keyword...');
    const locationInput = screen.getByPlaceholderText('Your Location');
    const findJobButton = screen.getByText('Find Job');
    
    fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(locationInput, { target: { value: 'New York' } });
    fireEvent.click(findJobButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Software Engineer', 'New York');
  });
});
