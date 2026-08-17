import api from "./axiosConfig";

export interface GetUserInformationData {
    username: string
}

export const getUserByUserName = async (data: GetUserInformationData) => {
    const response = await api.get(`/users/${data.username}/profile`);

    return response.data;
};

