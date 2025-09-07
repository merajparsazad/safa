import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditService } from "../../api/apiServices";
import { toast } from "react-toastify";

function CreateServiceForm({ serviceToEdit = {} }) {
  const { id: editId, ...editValues } = serviceToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createService } = useMutation({
    mutationFn: createEditService,
    onSuccess: () => {
      toast.success("خدمت جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { isPending: isEditing, mutate: editService } = useMutation({
    mutationFn: ({ newServiceData, id }) =>
      createEditService(newServiceData, id),
    onSuccess: () => {
      toast.success("خدمت با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    let fakePath = null;

    if (data.image && data.image.length > 0) {
      const file = typeof data.image === "string" ? data.image : data.image[0];
      fakePath =
        typeof file === "string" ? file : `/business-images/${file.name}`;
    }

    if (isEditSession)
      editService({ newServiceData: { ...data, image: fakePath }, id: editId });
    else
      createService({
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("price", {
            required: "تکمیل این بخش الزامیست",
          })}
        />
      </FormRow>

      <FormRow label="توضیحات" error={errors?.description?.message}>
        <TextArea
          type="text"
          id="description"
          disabled={isWorking}
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
        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "ویرایش" : "اضافه کردن"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateServiceForm;
