import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect'
import Controls from './Controls'

afterEach(cleanup);

describe('checking the controls', () => {
  describe('when gate is open and unlocked', () => {
    test('if Lock Gate is displayed and disabled', () => {
      const { getByText } = render(<Controls />)
      const lockControl = getByText('Lock Gate')
      expect(lockControl).toBeDisabled();
    });

    test('if Close Gate is displayed and not disabled', () => {
      const { getByText } = render(<Controls />)
      const closeGate = getByText('Close Gate');
      expect(closeGate).not.toBeDisabled();
    });
  });

  describe('when gate is closed and unlocked', () => {
    test('if Lock Gate is displayed and not disabled', () => {
      const { getByText } = render(<Controls locked = {false} closed = {true} />)
      const lockControl = getByText('Lock Gate')
      expect(lockControl).not.toBeDisabled();
    });

    test('if Open Gate is displayed and not disabled', () => {
      const { getByText } = render(<Controls locked = {false} closed = {true}/>);
      const openGate = getByText('Open Gate');
      expect(openGate).not.toBeDisabled();
    });
  });

  describe('when gate is closed and locked', () => {
    test('if Unlock Gate is displayed and not disabled', () => {
      const { getByText } = render(<Controls locked = {true} closed = {true} />);
      const unlockControl = getByText('Unlock Gate')
      expect(unlockControl).not.toBeDisabled()
    });

    test('if Open Gate is displayed and disabled', () => {
      const { getByText }= render(<Controls  locked = {true} closed = {true} />);
      const openGate = getByText('Open Gate');
      expect(openGate).toBeDisabled();
    })
  });
})