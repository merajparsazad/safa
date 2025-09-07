import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditService } from "../../api/apiServices";
import { toast } from "react-toastify";

export function useEditService() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editService } = useMutation({
    mutationFn: ({ newServiceData, id }) =>
      createEditService(newServiceData, id),
    onSuccess: () => {
      toast.success("خدمت با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editService };
}
