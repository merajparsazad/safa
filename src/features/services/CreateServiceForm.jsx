import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createService } from "../../api/apiServices";
import { toast } from "react-toastify";

function CreateServiceForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      toast.success("خدمت جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    const file = data.image[0];
    const fakePath = `/business-images/${file.name}`;

    mutate({
      ...data,
      business_id: 101,
      image: fakePath,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="عنوان خدمت" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          autoFocus
          {...register("name", {
            required: "تکمیل این بخش الزامیست",
            minLength: {
              value: 2,
              message: "تعداد حروف عنوان خدمت باید بیشتر از 2 باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="مدت زمان" error={errors?.duration?.message}>
        <Input
          type="number"
          id="duration"
          disabled={isCreating}
          {...register("duration", {
            required: "تکمیل این بخش الزامیست",
            min: {
              value: 1,
              message: "مدت زمان خدمات باید بیشتر از 1 دقیقه باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="بها" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          disabled={isCreating}
          {...register("price", {
            required: "تکمیل این بخش الزامیست",
          })}
        />
      </FormRow>

      <FormRow label="توضیحات" error={errors?.description?.message}>
        <TextArea
          type="text"
          id="description"
          disabled={isCreating}
          {...register("description", {
            required: "تکمیل این بخش الزامیست",
          })}
        />
      </FormRow>

      <FormRow label="تصویر">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button variant="secondary" type="reset">
          پاک کردن
        </Button>
        <Button type="submit" disabled={isCreating}>
          اضافه کردن
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateServiceForm;
