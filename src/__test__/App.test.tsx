// Imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// To Test
import App from '../App';

// Tests
test('Renders main page correctly', async () => {
  //user event setup
  const user = userEvent.setup();
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole('button');
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe('count is: 0');
  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).not.toBeInTheDocument();

  // Init
  await user.click(buttonCount);
  await user.click(buttonCount);

  // Post Expectations
  expect(buttonCount.innerHTML).toBe('count is: 2');
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
