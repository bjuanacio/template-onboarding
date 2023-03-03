import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "../../atoms/link/link";
import { Card } from "../../atoms/card/card";
import './register.scss'
import { CheckBox } from "../../checkbox/checkbox";

const RegisterForm = () => {

    const handleClick = () => {
        alert("Data: " + username + " - " + password);
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Card>
            <Container>
                <Row>
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Registrarse</Typography>
                </Row>

                <hr></hr>
                <Row>
                    <Input
                        type="text"
                        label="Nombre de usuario"
                        size="medium"
                        state="normal"
                        value={username}
                        onChange={setUsername}
                        placeholder="Ej. makoto"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                    ></Input>
                </Row>

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
                        tabIndexElement={2}
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
                        tabIndexElement={3}
                    ></Input>
                </Row>  <Row>
                    <Input
                        label="Confirmar contraseña"
                        size="medium"
                        state="normal"
                        value={password}
                        onChange={setPassword}
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={3}
                    ></Input>
                </Row>

                <Row>
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Categorias</Typography>
                </Row>


                <Container className="category-contanier">
                    <CheckBox>Anime</CheckBox>
                    <CheckBox>Ciencia Ficcion</CheckBox>
                    <CheckBox>Novelas</CheckBox>
                    <CheckBox>Drama</CheckBox>
                    <CheckBox>Inteligencia Artificial</CheckBox>
                </Container>
                {/*  */}

                <Row className="register__actionRow">
                    <Col><Link href="#">Iniciar sesion</Link></Col>
                    <Col><Button
                        tabIndexInner={3}
                        size="medium"
                        color="primary"
                        onClick={handleClick}
                    >
                        Registrar
                    </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default RegisterForm
