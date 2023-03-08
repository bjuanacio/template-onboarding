import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from './link'

describe('Link', () => {
  it('should display inner text', async () => {
    render(<Link href='#'>Hazme click</Link>)
    const linkFound = await screen.findByText('Hazme click')
    expect(linkFound).toBeDefined()
    expect(linkFound).toHaveTextContent('Hazme click')
  })

  it('should trigger the click', async () => {
    const onClick = jest.fn()
    render(
      <Link href='#' onClick={onClick}>
        Hazme click
      </Link>
    )
    const linkFound = await screen.findByText('Hazme click')
    expect(onClick).toBeCalledTimes(0)
    fireEvent(linkFound, new CustomEvent('clickbutton', { detail: '' }))
    expect(onClick).toHaveBeenCalled()
  })
})
