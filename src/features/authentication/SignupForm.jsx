import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, reset, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  const { isPending, signup } = useSignup();

  function onSubmit(data) {
    const { passwordConfirm, ...newUser } = data;
    signup(
      {
        ...newUser,
        avatar: "",
        business_role: false,
        business_id: null,
        created_at: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          reset();
        },
        onSettled: () => {
          reset();
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type="modal">
      <FormRow label="نام و نام خانوادگی" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isPending}
          {...register("fullName", { required: "تکمیل این بخش الزامیست" })}
        />
      </FormRow>

      <FormRow label="آدرس ایمیل" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "تکمیل این بخش الزامیست",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "لطفا از ایمیل معتبر استفاده کنید",
            },
          })}
        />
      </FormRow>

      <FormRow label="شماره موبایل" error={errors?.phone?.message}>
        <Input
          type="tel"
          id="phone"
          disabled={isPending}
          {...register("phone_number", {
            required: "تکمیل این بخش الزامیست",
            pattern: {
              value: /^(?:(?:\+98|98|0)?9\d{9})$/,
              message: "لطفا از شماره تماس معتبر استفاده کنید",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="رمز عبور (حداقل 8 کارکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "تکمیل این بخش الزامیست",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل 8 کارکتر داشته باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تکرار رمز عبور" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "تکمیل این بخش الزامیست",
            validate: (value) =>
              value === getValues().password ||
              "رمز عبور را به درستی تکرار کنید",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" disabled={isPending}>
          انصراف
        </Button>
        <Button disabled={isPending}>ایجاد</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
