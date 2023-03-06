import "./app.scss";
import Login from "./components/molecules/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./components/molecules/register/register";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Routes>

          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login></Login>} />
          {/* <Route
            path="/protected"
            element={
              <RequireAuth>

              </RequireAuth>
            }
          /> */}

        </Routes>

      </div>
    </div >
  );
}

export default App;
