import { render, screen } from '@testing-library/react'
import { Card } from './card' 

describe('Card', () => {
  it('Should render with text', async () => {
    render(<Card><div>Texto de prueba</div></Card>)
    const input = screen.getByText('Texto de prueba')
    expect(input).toBeInTheDocument()
  })
})
