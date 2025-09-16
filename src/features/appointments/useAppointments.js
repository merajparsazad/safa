import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../../api/apiAppointments";
import { useAuth } from "../authentication/AuthContext";

export function useAppointments() {
  const { user } = useAuth();
  const businessId =
    user?.business_role === true ? Number(user.business_id) : null;

  const {
    isPending,
    error,
    data: appointments,
  } = useQuery({
    queryKey: ["appointments", businessId],
    queryFn: () => getAppointments(businessId),
    enabled: !!businessId,
  });

  return { isPending, error, appointments };
}
