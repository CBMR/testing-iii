import React from 'react';
import 'jest-dom/extend-expect'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Dashboard from './Dashboard'

afterEach(cleanup)

describe('checking the dashboard', () => {
  describe('checks that both display and controls render', () => {
    test('renders display', () => {
      const { getByText } = render(<Dashboard />);
      getByText('Open')
    });

    test('renders controls', () => {
      const { getByText } = render(<Dashboard />)
      getByText('Close Gate')
    });
  });
})