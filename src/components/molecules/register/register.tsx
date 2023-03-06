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
import './register.scss'
import { CheckBox } from "../../checkbox/checkbox";
import useValidateFields from "../../../hooks/use-validateFields/use-validateFields";

const RegisterForm = () => {


    const [username1, setUsername] = useState("marco9090");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const { handleValidatePassword, handlevalidateEmail, confirmPassErrorMsg, handleValidateEqualPassword, validConfirPass, passErrorMsg, userNameErrorMsg, validPass, validUsername } = useValidateFields();

    const handleClick = () => {
        console.log()
        handleValidateEqualPassword(password, confirmPass)
        alert("Data: " + username1 + " - " + confirmPass);
    };

    useEffect(() => {
        handlevalidateEmail(mail)
    }, [mail]);

    useEffect(() => {
        handleValidatePassword(password)
    }, [password]);

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
                        value={username1}
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
                        state={validUsername}
                        value={mail}
                        onChange={setMail}
                        placeholder="Ej. name@example.com"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
                        errorHelper={userNameErrorMsg}
                    ></Input>
                </Row>


                <Row>
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
                        tabIndexElement={3}
                        errorHelper={passErrorMsg}
                    ></Input>
                </Row>  <Row>
                    <Input
                        label="Confirmar contraseña"
                        size="medium"
                        state={validConfirPass}
                        value={confirmPass}
                        onChange={setConfirmPass}
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={3}
                        errorHelper={confirmPassErrorMsg}
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
                    <Col>
                        <Link to="/login">Iniciar sesion</Link>
                    </Col>
                    <Col>
                        <Button
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
