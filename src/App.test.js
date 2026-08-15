import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/이하늘/i);
  expect(heading).toBeInTheDocument();
});
