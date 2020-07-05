import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders ToDo list title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ToDo list/i);
  expect(linkElement).toBeInTheDocument();
});
