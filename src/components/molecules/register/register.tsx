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
import categoryList from '../../../mockData/category/category.json';
import useRegister from "./use-register/use-register";


export interface IUser {
    name: string
    category: Array<number>
    password: string
    email: string
}


const RegisterForm = () => {

    const [user, setUsername] = useState<IUser>({
        name: '',
        category: [],
        password: '',
        email: ''
    });
    const [confirmPass, setConfirmPass] = useState("");

    const { handleValidatePassword, handlevalidateEmail, confirmPassErrorMsg, handleValidateEqualPassword, validConfirPass, passErrorMsg, userNameErrorMsg, validPass, validUsername } = useValidateFields();
    const { handleRegister } = useRegister();

    const handleClick = () => {
        const valid = handleValidateEqualPassword(user.password, confirmPass);
        if (valid) {
            handleRegister(user);
        }
    };

    const handleClickCheck = (e: any) => {
        const { value, checked } = e.target;
        const categories = user.category;
        if (checked) {
            categories.push(value);
        }
        else {
            const index = categories.indexOf(value);
            if (index > -1) {
                categories.splice(index, 1);
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        setUsername(prevState => ({ ...prevState, [name]: value }))
    }

    useEffect(() => {
        handlevalidateEmail(user.email)
    }, [user.email]);

    useEffect(() => {
        handleValidatePassword(user.password)
    }, [user.password]);

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
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Ej. makoto"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                        nameElement="name"
                    ></Input>
                </Row>

                <Row>
                    <Input
                        type="text"
                        label="Correo electronico"
                        size="medium"
                        state={validUsername}
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Ej. name@example.com"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
                        errorHelper={userNameErrorMsg}
                        nameElement="email"
                    ></Input>
                </Row>


                <Row>
                    <Input
                        label="Contraseña"
                        size="medium"
                        state={validPass}
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={3}
                        errorHelper={passErrorMsg}
                        nameElement="password"
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
                    {categoryList.map(({ id, description }) => {
                        return <div onClick={handleClickCheck}><CheckBox nameElement='category' value={id.toString()}>{description}</CheckBox></div>
                    })}
                </Container>

                <Row className="register__actionRow">
                    <Col>
                        <Link to="/login">Iniciar sesion</Link>
                    </Col>
                    <Col>
                        <div onClick={handleClick}>
                            <Button
                                tabIndexInner={3}
                                size="medium"
                                color="primary"

                            >
                                Registrar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card >
    )
}

export default RegisterForm
