import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/ds-utils";

function useValidateFields() {
    const [validUsername, setValidUsername] = useState<"normal" | "error">("normal");
    const [validPass, setValidPass] = useState<"normal" | "error">("normal");
    const [validConfirPass, setValidConfirmPass] = useState<"normal" | "error">("normal");
    const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    const [confirmPassErrorMsg, setConfirmPassErrorMsg] = useState("");

    const handlevalidateEmail = (username: string) => {
        const [isValid, errorMsg] = validateEmail(username)
        setValidUsername(isValid);
        setUserNameErrorMsg(errorMsg)
    }

    const handleValidatePassword = (password: string) => {
        const [isValid, errorMsg] = validatePassword(password)
        setValidPass(isValid);
        setPassErrorMsg(errorMsg)
    }

    const handleValidateEqualPassword = (password: string, confirmPass: string): boolean => {
        if (confirmPass === password) {
            setValidConfirmPass('normal');
            return true;
        }
        else {
            setValidConfirmPass('error');
            setConfirmPassErrorMsg('Las contraseñas deben coincidir')
            return false;
        }
    }

    return {
        validPass, validUsername, userNameErrorMsg, passErrorMsg, validConfirPass, confirmPassErrorMsg, handleValidatePassword, handlevalidateEmail, handleValidateEqualPassword
    }
}

export default useValidateFields;