import { UserLogin } from "../../utils/interfaces/user";
import axios from "axios";

const API = process.env.REACT_APP_PUBLIC_API_URL;

export const loginUser = async (email: string, password: string): Promise<UserLogin> => {

  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const responseLogin = await axios.post<UserLogin>(
    `${API}/login`,
    { email, password },
    options
  );

  if (!!(responseLogin.data as unknown as { code_error: string }).code_error) {
    throw new Error("Error en el Login");
  }

  return responseLogin.data;
}
