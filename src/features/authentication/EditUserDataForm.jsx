import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useEditUser } from "./useEditUser";
import { useAuth } from "./AuthContext";
import FileInput from "../../ui/FileInput";

function EditUserDataForm() {
  const { user } = useAuth();
  const { id, ...editValues } = user;
  const { register, reset, formState, handleSubmit } = useForm({
    defaultValues: editValues,
  });
  const { errors } = formState;
  const { isEditing, editUser } = useEditUser();

  function onSubmit(data) {
    let fakePath = null;

    if (data.avatar && data.avatar.length > 0) {
      const file =
        typeof data.avatar === "string" ? data.avatar : data.avatar[0];
      fakePath =
        typeof file === "string" ? file : `/avatar-images/${file.name}`;
    }

    editUser({
      newUser: {
        ...data,
        avatar: fakePath,
      },
      id,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="نام و نام خانوادگی" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isEditing}
          autoFocus
          {...register("fullName", { required: "تکمیل این بخش الزامیست" })}
        />
      </FormRow>

      <FormRow label="آدرس ایمیل" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isEditing}
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
        <Input type="tel" id="phone" disabled {...register("phone_number")} />
      </FormRow>

      <FormRow label="تصویر">
        <FileInput id="avatar" accept="image/*" {...register("avatar")} />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="button"
          disabled={isEditing}
          onClick={() => reset(editValues)}
        >
          انصراف
        </Button>
        <Button disabled={isEditing}>ویرایش</Button>
      </FormRow>
    </Form>
  );
}

export default EditUserDataForm;
