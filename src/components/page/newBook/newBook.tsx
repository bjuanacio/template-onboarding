import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../atoms/button/button";
import { CheckBox } from "../../atoms/checkbox/checkbox";
import { Header } from "../../atoms/header/header";
import { Input } from "../../atoms/input/input";
import { Typography } from "../../atoms/typography/typography";
import { CategoryCheckBoxList } from "../../molecules/categoryCheckList/categoryCheckList";
import useRegister from "../../molecules/register/use-register/use-register";
import categoryList from '../../../mockData/category/category.json';
import './newBook.scss';

const NewBook = () => {
    const {
        validCategories,
        handleCategoryChecked,
    } = useRegister();

    return (
        <Container>
            <Header title='Biblioteca' userName='Kevin Suarez'></Header>
            <Row>
                <Typography align="left" variant="h2" weight="bold" sub-category="hero" weight-category="book">Registro libro</Typography>
            </Row>
            <Row>
                <Col>
                    <Input
                        type="text"
                        label="Nombre de libro"
                        size="medium"
                        // state={validUsername}
                        // value={userObj.name}
                        // onChange={handleSetUser}
                        placeholder="Ej. Angular"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                        // errorHelper={userNameErrorMsg}
                        nameElement="name"
                    ></Input>
                </Col>
                <Col>
                    <Input
                        type="text"
                        label="Nombre del autor"
                        size="medium"
                        // state={validUsername}
                        // value={userObj.name}
                        // onChange={handleSetUser}
                        placeholder="Ej. Kevin Suarez"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={2}
                        // errorHelper={userNameErrorMsg}
                        nameElement="name"
                    ></Input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input
                        type="text"
                        label="URL del libro"
                        size="medium"
                        // state={validUsername}
                        // value={userObj.name}
                        // onChange={handleSetUser}
                        placeholder="Ej. https://book.com"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={3}
                        // errorHelper={userNameErrorMsg}
                        nameElement="name"
                    ></Input>
                </Col>
                <Col>
                    <Input
                        type="text"
                        label="Imagen de portada"
                        size="medium"
                        // state={validUsername}
                        // value={userObj.name}
                        // onChange={handleSetUser}
                        placeholder="Ej. https://book.com/igm.jepg"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={4}
                        // errorHelper={userNameErrorMsg}
                        nameElement="name"
                    ></Input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="bookResume">Resumen del libro</label>
                    <textarea id="bookResume"></textarea>
                </Col>
                <Col>
                    {/* <div onClick={handleCategoryChecked}> */}
                    <CheckBox nameElement='category'>Publico</CheckBox>
                    {/* </div> */}
                </Col>
            </Row>
            <Row>
                <Typography align="left" variant="h2" weight="bold" sub-category="hero" weight-category="book">Categorias</Typography>
                <CategoryCheckBoxList handleCategoryChecked={handleCategoryChecked} validCategories={validCategories} categoryList={categoryList}></CategoryCheckBoxList>
            </Row>
            <Row>
                <Col>
                    <Button color="secondary">Cancelar</Button>
                </Col>
                <Col>
                    <Button>Registrar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NewBook;