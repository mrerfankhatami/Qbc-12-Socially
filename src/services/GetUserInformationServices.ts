import api from "./axiosConfig";

interface GetUserInformationData {
    username: string
}

export const getUserByUserName = async (data: GetUserInformationData) => {
    const response = await api.get(`/api/users/${data.username}/profile`);

    return response.data;
};

