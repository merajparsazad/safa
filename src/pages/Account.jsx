import EditUserDataForm from "../features/authentication/EditUserDataForm";
import EditUserPasswordForm from "../features/authentication/EditUserPasswordForm";

function Account() {
  return (
    <>
      <h1 className="text-4xl font-semibold">ویرایش حساب کاربری</h1>
      <div className="flex flex-col gap-7">
        <h3 className="text-2xl font-semibold">ویرایش اطلاعات حساب</h3>
        <EditUserDataForm />
      </div>
      <div className="flex flex-col gap-7">
        <h3 className="text-2xl font-semibold">ویرایش رمز عبور</h3>
        <EditUserPasswordForm />
      </div>
      ;
    </>
  );
}

export default Account;
