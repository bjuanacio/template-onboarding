import { useState } from "react";
import { validateEmail, validateEmptyField, validatePassword } from "../../utils/ds-utils";

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
        // isValid === "error" ? setErrorCount(errorCount++) : setErrorCount(errorCount--);
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

    const handleValidateUserName = (fieldValue: string, fieldName: string) => {
        const [isValid, errorMsg] = validateEmptyField(fieldValue, fieldName);
        setValidUsername(isValid);
        setUserNameErrorMsg(errorMsg);
    }

    // const errorCounter = (isValid: "normal" | "error") => {
    //     if (isValid === "error") {
    //         setErrorCount(errorCount++)
    //     }
    //     else {
    //         setErrorCount(errorCount--)
    //     }
    //     console.log(isValid, errorCount);
    // }

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