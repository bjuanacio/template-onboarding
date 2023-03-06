import { useState, FormEvent } from "react";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { Link } from "react-router-dom";
import "./login-form.scss";
import { validateEmail, validatePassword } from "../../../utils/ds-utils";
import { loginUser } from "../../../services/auth/auth-service";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(email?.length === 0 ? "Correo es requerido": emailError);
    setPasswordError(password?.length === 0 ? "Contraseña requerida" : passwordError);

    if (!emailError && !passwordError) {
      try {
        const { access_token } = await loginUser(email, password)
        if ( access_token ) {
          sessionStorage.setItem("token", access_token);
          setLoginError("");
        }
      } catch (error) {
        setLoginError("Error en la autenticación del usuario");
      }
    }
  };

  const handleEmailValue = (value: string) => {
    if (!validateEmail(value)) {
      setEmailError("Por favor, ingrese un correo válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordValue = (value: string) => {
    if (!validatePassword(value)) {
      setPasswordError("Por favor, ingrese una contraseña válida");
    } else {
      setPasswordError("");
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
              onBlur={handlePasswordValue}
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
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
