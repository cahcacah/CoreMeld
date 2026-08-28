// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreMeld title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreMeld/i);
    expect(titleElement).toBeInTheDocument();
});
