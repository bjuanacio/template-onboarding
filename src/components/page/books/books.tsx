import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography } from '../../atoms/typography/typography';
import { Input } from '../../atoms/input/input';
import { Button } from '../../atoms/button/button';
import { Select } from '../../atoms/select/select';
import { Link } from 'react-router-dom';
import { Header } from '../../atoms/header/header';
import { BookList } from '../../molecules/bookList/bookList';
import { useEffect, useState } from 'react';
import { asyncFetch } from '../../../utils/ds-utils';
import { Book } from '../../../utils/interfaces/book';

const BooksPage = () => {

    let [books, setBooks] = useState<Book[]>([]);

    const handleGetBooks = async () => {
        const url = 'books/owner';
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Authorization': `Bearer ${sessionStorage.access_token}`,
            mode: 'no-cors',

        });

        const requestOptions = {
            method: 'GET',
            headers: headers,
        };

        const { responseJson, statusCode } = await asyncFetch(requestOptions, url);


        console.log(responseJson);

        if (statusCode === 200) {
            setBooks(responseJson);
            return true;
        }
        else {
            return false;
        }
    };


    useEffect(() => {

        handleGetBooks();
    }, []);

    return (
        <Container>
            <Header title='Biblioteca' userName='Kevin Suarez'></Header>
            <Row className='mb-3'>
                <Col >
                    <Typography variant='h1'>Tus Libros</Typography>
                </Col>
                <Col xs={4}>
                    <Link to='new'>
                        <Button
                            tabIndexInner={3}
                            size="medium"
                            color="secondary"
                        >
                            Agregar libro
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row >
                <Col >
                    <Input
                        type="text"
                        size="extra-small"
                        placeholder="Ej. makoto"
                        fullWidth={true}
                        controlEvent={true}
                        tabIndexElement={1}
                        nameElement="name"
                    ></Input>
                </Col>
                <Col>
                    <Select size='extra-small'></Select>
                </Col>
            </Row>
            <Row>
                <BookList rowMax={2} books={books}></BookList>
            </Row>

        </Container>
    );
};

export default BooksPage;