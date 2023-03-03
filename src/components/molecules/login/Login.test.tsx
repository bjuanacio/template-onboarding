import { fireEvent, render, screen } from '@testing-library/react'
import Login from './Login'

describe('Login', () => {
  it('Should render  OK', async () => {
    render(<Login></Login>)
    const login = screen.getByText('Iniciar sesion')
    expect(login).toBeInTheDocument()
  })

//   it('Should trigger the onChange callback', async () => {
//     const onChange = jest.fn()
//     render(<Login placeholder="Registro panel" type="text" onChange={onChange} />)
//     const input = screen.getByPlaceholderText('Registro panel')
//     fireEvent(input, new CustomEvent('eventValue', { detail: '123' }))
//     expect(onChange).toBeCalledWith('123')
//     expect(onChange).toBeCalledTimes(1)
//   })
})
