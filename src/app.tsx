import "./app.scss";
import Login from "./components/molecules/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./components/molecules/register/register";
import {
  Routes,
  Route,
} from "react-router-dom";
import RequireAuth from "./components/molecules/auth/auth";
import BooksPage from "./components/page/books/books";
import NewBook from "./components/page/newBook/newBook";

function App() {

  return (
    <div className="app">
      <div className="app__container">

        <Routes>

          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login></Login>} />
          <Route path="/books" element={<BooksPage></BooksPage>}>

          </Route>
          <Route path="/books/new" element={<NewBook></NewBook>} />
        </Routes>

      </div>
    </div >
  );
}

export default App;
