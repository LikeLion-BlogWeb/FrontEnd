import { ChangeEvent, useState } from "react";
import { UseInputProps, UseInputReturn } from "types/hook.type";

export const useInput = ({
        initialValue = "",
        validationFn = () => true
    } : UseInputProps) : UseInputReturn => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string>("");

    // 추상화된 만큼 각 태그명에 따라서 작업을 분리시킵니다.
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setValue(event.target.value);
        setError("");
    }

    function validateInput() {
        const isValid = validationFn(value);

        if(!isValid) {
            setError("입력이 올바르지 않습니다.");
        }

        return isValid
    }

    return {
        value,
        error,
        handleChange,
        validateInput
    };
}