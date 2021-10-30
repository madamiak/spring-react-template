import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);

  const textOnScreen = screen.getByText(/Hello World!/i);

  expect(textOnScreen).toBeInTheDocument();
});
