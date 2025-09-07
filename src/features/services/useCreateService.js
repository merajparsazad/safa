import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createEditService } from "../../api/apiServices";

export function useCreateService() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createService } = useMutation({
    mutationFn: createEditService,
    onSuccess: () => {
      toast.success("خدمت جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createService };
}
