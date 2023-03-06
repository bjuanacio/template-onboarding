import { asyncFetch } from "../../../../utils/ds-utils";

function useLogin() {

    const handleLogin = async (username: string, password: string) => {
        const url = 'users/login';
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            mode: 'no-cors',
        })

        const bodyRequest = {
            username: username,
            password: password,
        }

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyRequest)
        };
        const { responseJson, statusCode } = await asyncFetch(requestOptions, url);
        const { access_token } = responseJson;

        if (statusCode === 200) {
            sessionStorage.setItem("access_token", access_token);
            return true
        }
        else {
            return false
        }
    }

    return {
        handleLogin
    }
}

export default useLogin;