import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Zeeshan Ilahi/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
