import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /ToDoリスト/i });
  expect(heading).toBeInTheDocument();
});
