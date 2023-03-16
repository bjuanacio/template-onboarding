import { useEffect, useState } from "react";
import { asyncFetch } from "../../../../utils/ds-utils";
import useValidateFields from "../../../../utils/hooks/use-validateFields/use-validateFields";
import { IUser } from "../../../../utils/interfaces/user";
import { IAlert } from "../../../../utils/interfaces/alert";
import { Category } from "../../../../utils/interfaces/category";

function useRegister() {
    const {
        userNameErrorMsg,
        validUsername,
        validCategories,
        confirmPassErrorMsg,
        validConfirPass,
        passErrorMsg,
        EmailErrorMsg,
        validPass,
        validEmail,
        handleVaildCategories,
        handleValidatePassword,
        handlevalidateEmail,
        handleValidateConfPass,
        handleValidateEqualPassword,
        handleValidateUserName
    } = useValidateFields();

    let [isValidForm, setIsValidForm] = useState(false);
    const [userObj, setUsername] = useState<IUser>({
        name: '',
        category: [],
        password: '',
        email: ''
    });
    const [confirmPass, setConfirmPass] = useState("");
    const [alertMsg, setAlertMsg] = useState<IAlert>({
        message: '',
        status: 'success',
        open: false,
    });
   


    useEffect(() => {
        if (validUsername === "error") {
            setIsValidForm(false);
            return;
        }
        else if (!validCategories) {
            setIsValidForm(false);
            return;
        }
        else if (validEmail === "error") {
            setIsValidForm(false);
            return;
        }
        else if (validPass === "error") {
            setIsValidForm(false);
            return;
        }
        else if (validConfirPass === "error") {
            setIsValidForm(false);
            return;
        }
        else {
            setIsValidForm(true);
        }

    }, [validUsername, validCategories, validEmail, validPass, validConfirPass]);

    useEffect(() => {
        if (alertMsg.open) {
            setTimeout(() => {
                setAlertMsg({
                    open: false,
                });
            }, 3000);
        }
    }, [alertMsg]);

    useEffect(() => {
        handleValidateUserName(userObj.name, 'Este campo es requerido');
    }, [userObj.name]);

    useEffect(() => {
        handleValidateConfPass(confirmPass, 'Este campo es requerido');
    }, [confirmPass]);

    useEffect(() => {
        handlevalidateEmail(userObj.email);
    }, [userObj.email]);

    useEffect(() => {
        handleValidatePassword(userObj.password);
    }, [userObj.password]);

    const handleRegister = async ({ category, email, name, password }: IUser,) => {
        const url = 'users/create';
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            mode: 'no-cors',
        });

        const bodyRequest: IUser = {
            name: name,
            email: email,
            password: password,
            category: category
        };

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyRequest)
        };
        const { responseJson } = await asyncFetch(requestOptions, url);

        if (responseJson === "Usuario creado exitosamente.") {
            return true;
        }
        else {
            return false;
        }
    };

    const handleRegisterClick = async () => {
        const valid = handleValidateEqualPassword(userObj.password, confirmPass);
        if (valid && isValidForm) {
            const response = await handleRegister(userObj);
            if (response) {
                setAlertMsg({
                    message: 'Usuario creado exitosamente.',
                    open: true,
                    status: "success"
                });
            }
            else {
                setAlertMsg({
                    message: "Este usuario ya existe.",
                    open: true,
                    status: "warning"
                });
            }

        }
        else {
            setAlertMsg({
                message: 'Algun campo del formulario necesita validacion',
                open: true,
                status: "warning"
            });
        }

    };

    const handleCategoryChecked = (e: any) => {
        const { value, checked } = e.target;
        const categories = userObj.category;
        if (checked) {
            categories.push(value);
        }
        else {
            const index = categories.indexOf(value);
            if (index > -1) {
                categories.splice(index, 1);
            }
        }
        handleVaildCategories(userObj.category);
    };

    const handleSetUser = (value: string, name: string) => {
        setUsername(prevState => ({ ...prevState, [name]: value }));
    };

    return {
        handleRegister,
        setConfirmPass,
        userNameErrorMsg,
        alertMsg,
        confirmPass,
        validUsername,
        userObj,
        handleSetUser,
        validEmail,
        EmailErrorMsg,
        validPass,
        passErrorMsg,
        validConfirPass,
        confirmPassErrorMsg,
        handleCategoryChecked,
        validCategories,
        handleRegisterClick
    };
}

export default useRegister;