import "./app.scss";
import Login from "./components/molecules/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./components/molecules/register/register";
import {
  Routes,
  Route,
} from "react-router-dom";
import RequireAuth from "./components/molecules/auth/auth";

function App() {

  return (
    <div className="app">
      <div className="app__container">

        <Routes>

          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/books"
            element={
              <RequireAuth>
                <div></div>
              </RequireAuth>
            }
          />

        </Routes>

      </div>
    </div >
  );
}

export default App;
