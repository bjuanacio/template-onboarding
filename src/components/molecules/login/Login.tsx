import { useEffect, useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "../../atoms/link/link";
import { Card } from "../../atoms/card/card";
import './Login.scss'
import { validateRegex, asyncFetch } from "../../../utils/ds-utils";

const Login = () => {

    const handleClick = async () => {

        const url = 'users/login';
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            mode: 'no-cors',
        })

        const bodyRequest = {
            username: username,
            password: password,
        }

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyRequest)
        };
        const { responseJson } = await asyncFetch(requestOptions, url);
        const { access_token } = responseJson;
        sessionStorage.setItem("access_token", access_token);
    };

    const [username, setUsername] = useState("marco9090");
    const [validUsername, setValidUsername] = useState<"normal" | "error">("normal");
    const [validPass, setValidPass] = useState<"normal" | "error">("normal");
    const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [password, setPassword] = useState("Marco9021");

    useEffect(() => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const [isValid, errorMsg] = validateRegex(regex, username, "Correo")
        setValidUsername(isValid);
        setUserNameErrorMsg(errorMsg)
    }, [username]);

    useEffect(() => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/g;
        const [isValid, errorMsg] = validateRegex(regex, password, "Contraseña")
        setValidPass(isValid);
        setPassErrorMsg(errorMsg)
    }, [password]);


    return (
        <Card>
            <Container className="login">
                <Row className="login__row">
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Iniciar sesion</Typography>
                </Row>

                <hr></hr>

                <Row className="login__row">
                    <Input
                        type="text"
                        label="Nombre de usuario"
                        size="medium"
                        state={validUsername}
                        value={username}
                        onChange={setUsername}
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
                    <Col><Link href="#">Registrate aqui</Link></Col>
                    <Col><Button
                        tabIndexInner={3}
                        size="medium"
                        color="primary"
                        onClick={handleClick}
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