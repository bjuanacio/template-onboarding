import { fireEvent, render, screen } from '@testing-library/react'
import { CheckBox } from './checkbox'

describe('Typography', () => {
  it('Should render with text', async () => {
    render(<CheckBox>Hazme click</CheckBox>)
    const checkBoxFound = screen.getByText('Hazme click')
    expect(checkBoxFound).toBeDefined()
    expect(checkBoxFound).toHaveTextContent('Hazme click')
  })

  it('should trigger the click', async () => {
    const onClick = jest.fn()
    render(
      <CheckBox onClickCheck={onClick}>
        Hazme click
      </CheckBox>
    )
    const checkBoxFound = await screen.findByText('Hazme click')
    expect(onClick).toBeCalledTimes(0)
    fireEvent(checkBoxFound, new CustomEvent('click-check', { detail: '' }))
    expect(onClick).toHaveBeenCalled()
  })
})
