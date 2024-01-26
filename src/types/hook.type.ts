import { ChangeEvent } from "react";

export interface UseInputProps {
    initialValue: string;
    validationFn: (value: string) => boolean;
}

export interface UseInputReturn {
    value: string;
    error: string;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    validateInput: () => boolean;
}