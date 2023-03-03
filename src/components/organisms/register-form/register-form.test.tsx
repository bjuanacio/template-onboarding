import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./register-form";

describe('LoginForm component', () => {

  it('should render the email and password input correctly', () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    )

    const form = screen.getByRole("form", { name: /Register Form/i });
    expect(form).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText('Ej. makoto');
    expect(usernameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Ej. name@example.com');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getAllByPlaceholderText('*****')
    expect(passwordInput).toHaveLength(2);
  });

  it('should render the link and the button correctly', () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    )

    const registerLink = screen.getByRole('link');
    expect(registerLink).toBeInTheDocument();

    const signInButton = screen.getByRole('button')
    expect(signInButton).toBeInTheDocument();
  });
})
