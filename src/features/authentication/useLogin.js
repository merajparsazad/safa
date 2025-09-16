import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    },
    onError: (err) => {
      err.message;
      toast.error("ایمیل یا پسورد اشتباه است.");
    },
  });

  return { login, isPending };
}
