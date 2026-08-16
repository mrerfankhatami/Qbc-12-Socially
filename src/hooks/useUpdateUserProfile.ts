import { useMutation } from "@tanstack/react-query";
import { updateUserById } from "../services/updateUserProfileServices";

export const useLoginMutation = () => {
  const mutation = useMutation({ mutationFn:  updateUserById});

  return mutation;
};
