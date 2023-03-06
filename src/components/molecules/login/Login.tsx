import { useEffect, useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Link as LinkCustom } from "../../atoms/link/link";
import { Card } from "../../atoms/card/card";
import './Login.scss'
import useLogin from "./use-login/use-login";
import useValidateFields from "../../../hooks/use-validateFields/use-validateFields";

const Login = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useLogin();
    const { handleValidatePassword, handlevalidateEmail, passErrorMsg, userNameErrorMsg, validPass, validUsername } = useValidateFields();



    useEffect(() => {
        handlevalidateEmail(userName)
    }, [userName]);

    useEffect(() => {
        handleValidatePassword(password)
    }, [password]);

    const handleChange = (e: any) => {
        handlevalidateEmail(e)
        setuserName(e);
    }
    const handleClick = () => {
        // const result = await handleLogin(userName, password);
        console.log(userName, password)
    };
    return (
        <Card>
            <Container className="login">
                <Row className="login__row">
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Iniciar sesion</Typography>
                </Row>

                <hr></hr>
                <div>{userName}</div>
                <Row className="login__row">
                    <Input
                        type="text"
                        label="Nombre de usuario"
                        size="medium"
                        state={validUsername}
                        value={userName}
                        onChange={handleChange}
                        placeholder="Nombre de usuario"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                        errorHelper={userNameErrorMsg}
                    ></Input>
                </Row>
                <Row className="login__row">
                    <Input
                        label="Contraseña"
                        size="medium"
                        state={validPass}
                        value={password}
                        onChange={setPassword}
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
                        errorHelper={passErrorMsg}
                    ></Input>
                </Row>
                <Row className="login__actionRow">
                    <Col>
                        <Link to="/register">Registrate aqui</Link>
                        {/* <LinkCustom href="#">Registrate aqui</LinkCustom> */}
                    </Col>
                    <Col>
                        <Button
                            tabIndexInner={3}
                            size="medium"
                            color="primary"
                            onClick={handleClick}
                            idelement="btnRegister"
                        >
                            Iniciar Sesion
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )

}

export default Login;