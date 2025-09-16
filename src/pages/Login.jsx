import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[40rem] content-center justify-center gap-10 bg-gray-50">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h4 className="text-center text-3xl font-semibold">
        ورود به حساب کاربری
      </h4>
      <LoginForm />
    </main>
  );
}

export default Login;
