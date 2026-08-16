import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../services/authServices"

export const useLoginMutation = () => {
    const mutation = useMutation({mutationFn: loginRequest})

    return mutation;
}