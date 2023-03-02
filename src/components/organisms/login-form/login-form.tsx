import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { Link } from 'react-router-dom';
import "./login-form.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // event.preventDefault();
    console.log("handleClick");
  };

  return (
    <div className="login">
      <div className="login__container">
        <form onSubmit={handleSubmit} aria-label="Login form">
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
              state="normal"
              value={email}
              onChange={setEmail}
              placeholder="Ej. name@example.com"
              fullWidth={true}
              controlEvent={true}
              tabIndexElement={1}
            ></Input>
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
          </div>

          <div className="login__actions">
            <Link to='/register'>Regístrate aquí</Link>
            <Button
              tabIndexInner={4}
              size="medium"
              color="primary"
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
