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
import { validateRegex } from "../../../utils/ds-utils";

const Login = () => {

    const handleClick = () => {
        alert("Data: " + username + " - " + password);
    };
    const [username, setUsername] = useState("");
    const [validUsername, setValidUsername] = useState<"normal" | "error">("normal");
    const [validPass, setValidPass] = useState<"normal" | "error">("normal");
    const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const [isValid,errorMsg] = validateRegex(regex, username,"Correo")
        setValidUsername(isValid);
        setUserNameErrorMsg(errorMsg)
    }, [username]);

    useEffect(() => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/g;
        const [isValid,errorMsg] = validateRegex(regex, password,"Contraseña")
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
                        label="Correo electronico"
                        size="medium"
                        state={validUsername}
                        value={username}
                        onChange={setUsername}
                        placeholder="Ej. name@example.com"
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