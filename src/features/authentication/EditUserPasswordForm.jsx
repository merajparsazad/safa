import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useEditUser } from "./useEditUser";
import { useAuth } from "./AuthContext";

function EditUserPasswordForm() {
  const { user } = useAuth();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { isEditing, editUser } = useEditUser();

  function onSubmit({ password }) {
    editUser(
      {
        newUser: {
          password,
        },
        id: user.id,
      },
      { onSuccess: reset() },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="رمز عبور (حداقل 8 کارکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isEditing}
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
          disabled={isEditing}
          {...register("passwordConfirm", {
            required: "تکمیل این بخش الزامیست",
            validate: (value) =>
              getValues().password === value ||
              "رمز عبور را به درستی تکرار کنید",
          })}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary">
          انصراف
        </Button>
        <Button disabled={isEditing}>ویرایش</Button>
      </FormRow>
    </Form>
  );
}

export default EditUserPasswordForm;
