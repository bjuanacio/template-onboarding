import { fireEvent, render, screen } from '@testing-library/react'
import Login from './Login'

describe('Login', () => {
  it('Should render  OK', async () => {
    render(<Login></Login>)
    const login = screen.getByText('Iniciar sesion')
    expect(login).toBeInTheDocument()
  })

  it('Should render ', async () => {
    render(<Login></Login>)
    const login = screen.getByPlaceholderText('Nombre de usuario')
    expect(login).toBeInTheDocument()
  })


  it('Should trigger the onClick callback', async () => {
    const onClick = jest.fn()
    render(<Login />)
    const buttonFound = await screen.findByText('Iniciar Sesion')
    expect(onClick).toBeCalledTimes(0)
    fireEvent(buttonFound, new CustomEvent('clickbutton', { detail: '' }))
  })
})
