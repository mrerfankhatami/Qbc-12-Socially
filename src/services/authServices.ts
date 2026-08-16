import api from "./axiosConfig";

interface LoginData {
    email: string
    password: string
}

export const LoginRequest = async (data: LoginData) => {
    const res = await api.post("/authentication/login", data);

    return res.data;
};

