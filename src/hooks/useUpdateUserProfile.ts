import { useMutation } from "@tanstack/react-query";
import { updateUserById } from "../services/updateUserProfileServices";

export const useUpdateUserProfile = () => {
  const mutation = useMutation({ mutationFn:  updateUserById});

  return mutation;
};
