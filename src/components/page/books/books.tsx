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
import { IBook } from '../../atoms/book/book';

const BooksPage = () => {

    const books: IBook[] = [
        {
            id: "l18xkdsmox",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Practical MongoDB",
            subtitle: "Architecting, Developing, and Administering MongoDB",
            image: "https://itbook.store/img/books/9781484206485.png",
            url: "https://itbook.store/books/9781484206485",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "qq8yhv2qlh",
            public: true,
            author: "Unknow",
            resume: "",
            title: "The Definitive Guide to MongoDB, 3rd Edition",
            subtitle: "A complete guide to dealing with Big Data using MongoDB",
            image: "https://itbook.store/img/books/9781484211830.png",
            url: "https://itbook.store/books/9781484211830",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "paokhmdwbdq",
            public: true,
            author: "Unknow",
            resume: "",
            title: "MongoDB Performance Tuning",
            subtitle: "Optimizing MongoDB Databases and their Applications",
            image: "https://itbook.store/img/books/9781484268780.png",
            url: "https://itbook.store/books/9781484268780",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "l583tql723i",
            public: true,
            author: "Unknow",
            resume: "",
            title: "MongoDB in Action, 2nd Edition",
            subtitle: "Covers MongoDB version 3.0",
            image: "https://itbook.store/img/books/9781617291609.png",
            url: "https://itbook.store/books/9781617291609",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "dsni0zlllh6",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Pentaho Analytics for MongoDB",
            subtitle: "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            image: "https://itbook.store/img/books/9781782168355.png",
            url: "https://itbook.store/books/9781782168355",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "pfhb18vyegm",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Pentaho Analytics for MongoDB Cookbook",
            subtitle: "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            image: "https://itbook.store/img/books/9781783553273.png",
            url: "https://itbook.store/books/9781783553273",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "d34byj2ib6p",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Web Development with MongoDB and NodeJS, 2nd Edition",
            subtitle: "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
            image: "https://itbook.store/img/books/9781785287527.png",
            url: "https://itbook.store/books/9781785287527",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "hevn1gtyrp4",
            public: true,
            author: "Unknow",
            resume: "",
            title: "MongoDB Cookbook, 2nd Edition",
            subtitle: "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
            image: "https://itbook.store/img/books/9781785289989.png",
            url: "https://itbook.store/books/9781785289989",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "tpag7ci3rm",
            public: true,
            author: "Unknow",
            resume: "",
            title: "The Little MongoDB Book",
            subtitle: "",
            image: "https://itbook.store/img/books/1001592208320.png",
            url: "https://itbook.store/books/1001592208320",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "ises5wpwru",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Learning MongoDB",
            subtitle: "",
            image: "https://itbook.store/img/books/1001629462276.png",
            url: "https://itbook.store/books/1001629462276",
            category: [
                57
            ],
            userRegister: "q4qffw5f22"
        },
        {
            id: "2ac4ly00oen",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Learning Angular, 2nd Edition",
            subtitle: "A Hands-On Guide to Angular 2 and Angular 4",
            image: "https://itbook.store/img/books/9780134576978.png",
            url: "https://itbook.store/books/9780134576978",
            category: [
                57
            ],
            userRegister: "w7qfsa5f21"
        },
        {
            id: "zv0gskqufve",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Progressive Web Apps with Angular",
            subtitle: "Create Responsive, Fast and Reliable PWAs Using Angular",
            image: "https://itbook.store/img/books/9781484244470.png",
            url: "https://itbook.store/books/9781484244470",
            category: [
                57
            ],
            userRegister: "w7qfsa5f21"
        },
        {
            id: "nkizz2ctq0o",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Angular for Material Design",
            subtitle: "Leverage Angular Material and TypeScript to Build a Rich User Interface for Web Apps",
            image: "https://itbook.store/img/books/9781484254332.png",
            url: "https://itbook.store/books/9781484254332",
            category: [
                57
            ],
            userRegister: "w7qfsa5f21"
        },
        {
            id: "lf3lw1307f",
            public: true,
            author: "Unknow",
            resume: "",
            title: "Angular: Up and Running",
            subtitle: "Learning Angular, Step by Step",
            image: "https://itbook.store/img/books/9781491999837.png",
            url: "https://itbook.store/books/9781491999837",
            category: [
                57
            ],
            userRegister: "w7qfsa5f21"
        }
    ];



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