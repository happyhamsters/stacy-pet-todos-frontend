import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Hello world!/i);
  expect(text).toBeInTheDocument();
});
