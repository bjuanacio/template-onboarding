import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { Link } from "react-router-dom";
import { validateEmail } from "../../../utils/ds-utils";
import "./register-form.scss";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClick = () => {
    console.log('handleClick')
  }

  const handleEmailValue = (value: string) => {
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Por favor, ingrese un correo válido");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <form aria-label="Register Form">
          <div className="register__title">
            <Typography variant="h2" weight="bold" color="black">
              Registrarse
            </Typography>
          </div>
          <div className="register__fielset">
            <Typography variant="captionText" color="black">
              Nombre de Usuario
            </Typography>
            <Input
              size="medium"
              state={userNameError ? "error" : "normal"}
              value={userName}
              onChange={setUserName}
              placeholder="Ej. makoto"
              fullWidth={true}
              controlEvent={true}
              tabIndexElement={1}
            ></Input>
            {userNameError && <span>{userNameError}</span>}
            <Typography variant="captionText" color="black">
              Correo electrónico
            </Typography>
            <Input
              size="medium"
              state={emailError ? "error" : "normal"}
              value={email}
              onChange={handleEmailValue}
              placeholder="Ej. name@example.com"
              fullWidth={true}
              controlEvent={true}
              tabIndexElement={2}
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
              tabIndexElement={3}
            ></Input>
            {passwordError && <span>{passwordError}</span>}
            <Typography variant="captionText" color="black">
              Confirmar Contraseña
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
              tabIndexElement={3}
            ></Input>
            {passwordError && <span>{passwordError}</span>}
          </div>
          <div className="register__actions">
            <Link to="/signin">Iniciar Sesión</Link>
            <Button
              tabIndexInner={5}
              size="medium"
              color="primary"
              onClick={handleClick}
            >
              Registar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
