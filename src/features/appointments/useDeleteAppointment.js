import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAppointment as deleteAppointmentApi } from "../../api/apiAppointments";
import { toast } from "react-toastify";

export function useDeleteAppointment() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteAppointment } = useMutation({
    mutationFn: deleteAppointmentApi,
    onSuccess: () => {
      toast.success("نوبت با موفقیت حذف شد!");

      queryClient.invalidateQueries({
        queryKey: ["appointments"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteAppointment };
}
