import { useEffect, useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
// import { Link as LinkCustom } from "../../atoms/link/link";
import { Card } from "../../atoms/card/card";
import './register.scss'
import { CheckBox } from "../../checkbox/checkbox";
import useValidateFields from "../../../hooks/use-validateFields/use-validateFields";
import categoryList from '../../../mockData/category/category.json';
import useRegister from "./use-register/use-register";
import { Alert } from "../../atoms/alert/alert";


export interface IUser {
    name: string
    category: Array<number>
    password: string
    email: string
}

export interface IAlert {
    message?: string;
    status?: "error" | "info" | "success" | "warning";
    open?: boolean
}

const RegisterForm = () => {

    const [user, setUsername] = useState<IUser>({
        name: '',
        category: [],
        password: '',
        email: ''
    });
    const [confirmPass, setConfirmPass] = useState("");
    const [alertMsg, setAlertMsg] = useState<IAlert>({
        message: '',
        status: 'success',
        open: false,
    });
    let [isValidForm, setIsValidForm] = useState(false);

    const { userNameErrorMsg, validUsername, handleValidatePassword, handleVaildCategories, validCategories, handlevalidateEmail, handleValidateConfPass, confirmPassErrorMsg, handleValidateEqualPassword, validConfirPass, passErrorMsg, EmailErrorMsg, validPass, validEmail, handleValidateUserName } = useValidateFields();
    const { handleRegister } = useRegister();

    const handleClick = () => {
        const valid = handleValidateEqualPassword(user.password, confirmPass);
        if (valid && isValidForm) {
            handleRegister(user);
            setAlertMsg({
                message: 'Registro completado',
                open: true,
                status: "success"
            })
        }
        else {
            setAlertMsg({
                message: 'Algun campo del formulario necesita validacion',
                open: true,
                status: "warning"
            })
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
        handleVaildCategories(user.category)
    };

    const handleChange = (value: string, name: string) => {
        setUsername(prevState => ({ ...prevState, [name]: value }))
    }

    useEffect(() => {
        if (validUsername === "error") {
            setIsValidForm(false);
            return;
        }
        else if (!validCategories) {
            setIsValidForm(false);
            return;
        }
        else if (validEmail === "error") {
            setIsValidForm(false);
            return;
        }
        else if (validPass === "error") {
            setIsValidForm(false);
            return;
        }
        else if (validConfirPass === "error") {
            setIsValidForm(false);
            return;
        }
        else {
            setIsValidForm(true);
        }

    }, [validUsername, validCategories, validEmail, validPass, validConfirPass]);

    useEffect(() => {
        if (alertMsg.open) {
            setTimeout(() => {
                setAlertMsg({
                    open: false,
                })
            }, 3000);

        }
    }, [alertMsg]);

    useEffect(() => {
        handleValidateUserName(user.name, 'Este campo es requerido')
    }, [user.name]);

    useEffect(() => {
        handleValidateConfPass(confirmPass, 'Este campo es requerido')
    }, [confirmPass]);

    useEffect(() => {
        handlevalidateEmail(user.email)
    }, [user.email]);

    useEffect(() => {
        handleValidatePassword(user.password)
    }, [user.password]);

    return (
        <Card>
            <Alert idElement="global-message"
                open={alertMsg.open}
                variant="normal"
                status={alertMsg.status}
                adjust-in={false}
                top={0}
                allow-close={true}
                alertTitle={alertMsg.message}
                auto-close={true}
                closeTime={3000}
            />
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
                        state={validUsername}
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Ej. makoto"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                        errorHelper={userNameErrorMsg}
                        nameElement="name"
                    ></Input>
                </Row>

                <Row>
                    <Input
                        type="text"
                        label="Correo electronico"
                        size="medium"
                        state={validEmail}
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Ej. name@example.com"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
                        errorHelper={EmailErrorMsg}
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
                        nameElement="confPassword"
                    ></Input>
                </Row>

                <Row>
                    <Typography align="left" variant="hero" weight="bold" sub-category="hero" weight-category="book">Categorias</Typography>
                </Row>


                <Container className="category-contanier" fluid>
                    {categoryList.map(({ id, description }, index) => {
                        return (
                            <div onClick={handleClickCheck}><CheckBox nameElement='category' value={id.toString()}>{description}</CheckBox></div>
                        )
                    })}
                </Container>
                {!validCategories ? <Typography color="danger" align="left" variant="legalText">Debe seleccionar al menos 3 categorias</Typography> : ''}

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
