import { useState, FormEvent } from "react";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { Link } from "react-router-dom";
import "./login-form.scss";
import { validateEmail } from "../../../utils/ds-utils";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email?.length === 0) setEmailError("Correo es requerido");
    if (password?.length === 0) setPasswordError("Contraseña requerida");
  };

  const handleEmailValue = (value: string) => {
    if (!validateEmail(value)) {
      setEmailError("Por favor, ingrese un correo válido");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form aria-label="Login Form" onSubmit={handleSubmit}>
          <div className="login__title">
            <Typography variant="h2" weight="bold" color="black">
              Iniciar sesión
            </Typography>
          </div>
          <div className="login__fielset">
            <Typography variant="captionText" color="black">
              Correo electrónico
            </Typography>
            <Input
              size="medium"
              state={emailError ? "error" : "normal"}
              value={email}
              onChange={setEmail}
              onBlur={handleEmailValue}
              placeholder="Ej. name@example.com"
              fullWidth={true}
              controlEvent={true}
              tabIndexElement={1}
            ></Input>
            {emailError && <span>{emailError}</span>}
            <Typography variant="captionText" color="black">
              Contraseña
            </Typography>
            <Input
              size="medium"
              state="normal"
              value={password}
              onChange={setPassword}
              placeholder="*****"
              type="password"
              fullWidth={true}
              controlEvent={true}
              tabIndexElement={2}
            ></Input>
            {passwordError && <span>{passwordError}</span>}
          </div>
          <div className="login__actions">
            <Link to="/register">Regístrate aquí</Link>
            <button type="submit">
              <Typography variant="captionText" weight="bold">
                Iniciar Sesión
              </Typography>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
