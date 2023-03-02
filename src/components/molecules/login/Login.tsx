

import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "../../atoms/link/link";
import { Card } from "../../atoms/card/card";
import './Login.scss'

const Login = () => {

    const handleClick = () => {
        alert("Data: " + username + " - " + password);
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Card>
            <Container>
                <Row>
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Iniciar sesion</Typography>
                </Row>

                <hr></hr>

                <Row>
                    <Input
                        type="text"
                        label="Correo electronico"
                        size="medium"
                        state="normal"
                        value={username}
                        onChange={setUsername}
                        placeholder="Ej. name@example.com"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                    ></Input>
                </Row>
                <Row>
                    <Input
                        label="Contraseña"
                        size="medium"
                        state="normal"
                        value={password}
                        onChange={setPassword}
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
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