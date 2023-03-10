import { useState } from "react";
import { asyncFetch, validateEmail, validateEmptyField, validatePassword } from "../../ds-utils";

function useValidateFields() {
    const [validEmail, setValidEmail] = useState<"normal" | "error">("normal");
    const [validUsername, setValidUsername] = useState<"normal" | "error">("normal");
    const [validPass, setValidPass] = useState<"normal" | "error">("normal");
    const [validConfirPass, setValidConfirmPass] = useState<"normal" | "error">("normal");
    const [validCategories, setValidCategories] = useState(false);
    const [EmailErrorMsg, setEmailErrorMsg] = useState("");
    const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [confirmPassErrorMsg, setConfirmPassErrorMsg] = useState("");

    const handlevalidateEmail = (username: string) => {
        const [isValid, errorMsg] = validateEmail(username)
        setValidEmail(isValid);
        setEmailErrorMsg(errorMsg);
    }

    const handleValidatePassword = (password: string) => {
        const [isValid, errorMsg] = validatePassword(password)
        setValidPass(isValid);
        setPassErrorMsg(errorMsg);
    }

    const handleValidateConfPass = (fieldValue: string, fieldName: string) => {
        const [isValid, errorMsg] = validateEmptyField(fieldValue, fieldName);
        setValidConfirmPass(isValid);
        setConfirmPassErrorMsg(errorMsg);
    }

    const handleValidateUserName = async (fieldValue: string, fieldName: string) => {
        const [isValid, errorMsg] = validateEmptyField(fieldValue, fieldName);

        setValidUsername(isValid);
        setUserNameErrorMsg(errorMsg);

        if (isValid === 'normal') {
            const [existUserName, existErrorMsg] = await userNameExist(fieldValue);
            setValidUsername(existUserName);
            setUserNameErrorMsg(existErrorMsg);
        }
    }

    const userNameExist = async (name: string): Promise<["normal" | "error", string]> => {
        const url = `users/exist-name/?name=${name}`;
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            mode: 'no-cors',
        })

        const requestOptions = {
            method: 'GET',
            headers: headers,
        };
        const { responseJson } = await asyncFetch(requestOptions, url);
        const { exists } = responseJson;

        const result: ["normal" | "error", string] = exists ? ["error", "El nombre de usuario ya existe"] : ["normal", ""];

        return result;
    }

    const handleValidateEqualPassword = (password: string, confirmPass: string): boolean => {
        if (confirmPass === password) {
            setValidConfirmPass('normal');
            return true;
        }
        else {
            setValidConfirmPass('error');
            setConfirmPassErrorMsg('Las contraseñas deben coincidir');
            return false;
        }
    }

    const handleVaildCategories = (categories: number[]) => {
        categories.length >= 3 ? setValidCategories(true) : setValidCategories(false);
    }

    return {
        validUsername, validCategories, userNameErrorMsg, validPass, validEmail, EmailErrorMsg, passErrorMsg, validConfirPass, confirmPassErrorMsg, handleVaildCategories, handleValidatePassword, handlevalidateEmail, handleValidateEqualPassword, handleValidateConfPass, handleValidateUserName
    }
}

export default useValidateFields;