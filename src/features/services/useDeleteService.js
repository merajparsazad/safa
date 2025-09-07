import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteService as deleteServiceApi } from "../../api/apiServices";
import { toast } from "react-toastify";

export function useDeleteService() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteService } = useMutation({
    mutationFn: deleteServiceApi,
    onSuccess: () => {
      toast.success("خدمت با موفقیت حذف شد!");

      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteService };
}
