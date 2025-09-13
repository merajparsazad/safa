import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAppointment } from "../../api/apiAppointments";
import { toast } from "react-toastify";

export function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({ appointmentId, status }) =>
      updateAppointment(appointmentId, { status }),

    onSuccess: (data) => {
      toast.success(`نوبت #${data.id} با موفقیت ویرایش شد.`);
      queryClient.invalidateQueries(["appointments"]);
    },

    onError: () => toast.error("خطا در ویرایش نوبت"),
  });

  return { updateStatus, isUpdating };
}
