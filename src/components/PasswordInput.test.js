import React from 'react';
import { render } from '@testing-library/react';

import { Unsafe, Safe, SuperSafe } from './PasswordInput.stories';

it('renders unsafe password input', () => {
  const handleChange = jest.fn();

  render(<Unsafe onChange={handleChange} />);
});

it('renders safe password input', () => {
  const handleChange = jest.fn();

  render(<Safe onChange={handleChange} />);
});

it('renders super safe password input', () => {
  const handleChange = jest.fn();

  render(<SuperSafe onChange={handleChange} />);
});
