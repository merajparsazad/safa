import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../api/apiAuth";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export function useEditUser() {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  const { isPending: isEditing, mutate: editUser } = useMutation({
    mutationFn: ({ newUser, id }) => editUserApi(newUser, id),
    onSuccess: (updatedUser, variables) => {
      toast.success("اطلاعات کاربری با موفقیت ویرایش شد");
      queryClient.setQueryData(["user", variables.id], updatedUser);
      queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editUser };
}
