import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/organisms/login-form/login-form";
import RegisterForm from "./components/organisms/register-form/register-form";
import HomePage from "./components/pages/home-page/home-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App