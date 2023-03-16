import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Card } from "../../atoms/card/card";
import './register.scss';
import { CheckBox } from "../../atoms/checkbox/checkbox";
import categoryList from '../../../mockData/category/category.json';
import useRegister from "./use-register/use-register";
import { Alert } from "../../atoms/alert/alert";
import { CategoryCheckBoxList } from "../categoryCheckList/categoryCheckList";

const RegisterForm = () => {

    const {
        alertMsg,
        validUsername,
        userObj,
        userNameErrorMsg,
        confirmPass,
        validEmail,
        EmailErrorMsg,
        validPass,
        passErrorMsg,
        validConfirPass,
        confirmPassErrorMsg,
        validCategories,
        setConfirmPass,
        handleCategoryChecked,
        handleSetUser,
        handleRegisterClick
    } = useRegister();

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
                        value={userObj.name}
                        onChange={handleSetUser}
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
                        value={userObj.email}
                        onChange={handleSetUser}
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
                        value={userObj.password}
                        onChange={handleSetUser}
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
                <CategoryCheckBoxList handleCategoryChecked={handleCategoryChecked} validCategories={validCategories} categoryList={categoryList}></CategoryCheckBoxList>
              
                <Row className="register__actionRow">
                    <Col>
                        <Link to="/login">Iniciar sesion</Link>
                    </Col>
                    <Col>
                        <div onClick={handleRegisterClick}>
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
    );
};

export default RegisterForm;
