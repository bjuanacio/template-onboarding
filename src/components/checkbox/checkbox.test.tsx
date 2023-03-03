import { render, screen } from '@testing-library/react'
import { CheckBox } from './checkbox'

describe('Typography', () => {
  it('Should render with text', async () => {
    render(<CheckBox></CheckBox>)
    const input = screen.getByText('Texto de prueba')
    expect(input).toBeInTheDocument()
  })
})
