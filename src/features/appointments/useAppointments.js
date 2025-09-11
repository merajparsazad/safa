import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../../api/apiAppointments";

export function useAppointments() {
  const {
    isPending,
    error,
    data: appointments,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: () => getAppointments(101),
  });

  return { isPending, error, appointments };
}
