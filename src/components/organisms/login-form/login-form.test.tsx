import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./login-form";

describe('LoginForm component', () => {

  it('should render the email and password input correctly', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    )

    const form = screen.getByRole("form", { name: /Login Form/i });
    expect(form).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Ej. name@example.com');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('*****')
    expect(passwordInput).toBeInTheDocument();
  });

  it('should render the link and the button correctly', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    )

    const registerLink = screen.getByRole('link');
    expect(registerLink).toBeInTheDocument();

    const signInButton = screen.getByRole('button')
    expect(signInButton).toBeInTheDocument();
  });
})
