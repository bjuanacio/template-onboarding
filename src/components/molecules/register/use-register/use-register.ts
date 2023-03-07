import { asyncFetch } from "../../../../utils/ds-utils";
import { IUser } from "../register";

function useRegister() {

    const handleRegister = async ({ category, email, name, password }: IUser,) => {
        const url = 'users/create';
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            mode: 'no-cors',
        })

        const bodyRequest: IUser = {
            name: name,
            email: email,
            password: password,
            category: category
        }

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyRequest)
        };
        const { responseJson, statusCode } = await asyncFetch(requestOptions, url);

        if (statusCode === 200) {
            return true
        }
        else {
            return false
        }
    }

    return {
        handleRegister
    }
}

export default useRegister;