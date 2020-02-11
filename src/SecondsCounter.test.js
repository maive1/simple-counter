import React from 'react';
import { render } from '@testing-library/react';
import SecondsCounter from './SecondsCounter';

test('renders learn react link', () => {
  const { getByText } = render(<SecondsCounter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
