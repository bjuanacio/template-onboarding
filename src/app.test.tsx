import { fireEvent, render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  test('Should render the password and username input', () => {
    render(<App />)

    const usernameElement = screen.getByPlaceholderText('Nombre de usuario')
    expect(usernameElement).toBeInTheDocument()

    const passwordElement = screen.getByPlaceholderText('Password')
    expect(passwordElement).toBeInTheDocument()
  })

  test('should execute an alert when clicked the button', async () => {

    render(<App />)

    const buttonElement = screen.getByText('Iniciar Sesion')
    expect(buttonElement).toBeInTheDocument()
    fireEvent(buttonElement, new CustomEvent('clickbutton', { detail: '' }))

  })
})
