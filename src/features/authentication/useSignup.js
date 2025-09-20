import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../api/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function useSignup() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
      toast.success("حساب کاربری با موفقیت ایجاد شد");
    },
    onError: (err) => {
      err.message;
      toast.error("خطا در ثبت نام");
    },
  });

  return { signup, isPending };
}
