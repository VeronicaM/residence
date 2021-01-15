import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/Residence App/i);
  expect(headerText).toBeInTheDocument();
});
