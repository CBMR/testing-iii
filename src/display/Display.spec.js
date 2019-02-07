import  React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Display from  './Display'

afterEach(cleanup)

describe('Checking the display', () => {
  describe('when gate is open and unlocked', () => {
      test('that the locked classname is green-led', () => {
        const {getByText} = render(<Display locked={false} closed={false} />)
        const ifLocked = getByText('Unlocked')
        expect(ifLocked).toHaveClass('led green-led')
      })

      test('that the gate classname is green-led', () => {
        const {getByText} = render(<Display locked={false} closed={false} />)
        const ifClosed = getByText('Open')
        expect(ifClosed).toHaveClass('led green-led')
      })
  })

  describe('when the gate is closed and unlocked', () => {
    test('that the locked classname is green-led', () => {
      const {getByText} = render(<Display locked={false} closed={true} />)
      const ifLocked = getByText('Unlocked')
      expect(ifLocked).toHaveClass('led green-led')
    })

    test('that the gate classname is red-led', () => {
      const {getByText} = render(<Display locked={false} closed={true} />)
      const ifClosed = getByText('Closed')
        expect(ifClosed).toHaveClass('led red-led')
    })
  })

  describe('when the gate is closed and locked', () => {
    test('that the locked classname is red-led', () => {
      const {getByText} = render(<Display locked={true} closed={true} />)
      const ifLocked = getByText('Locked')
        expect(ifLocked).toHaveClass('led red-led')
    })

    test('that the gate classname is red-led', () => {
      const {getByText} = render(<Display locked={true} closed={true} />)
      const ifClosed = getByText('Closed')
      expect(ifClosed).toHaveClass('led red-led')
    })
  })
})