import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAppointments } from "../../api/apiAppointments";
import { useAuth } from "../authentication/AuthContext";

export function useRecentAppointments() {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const businessId =
    user?.business_role === true ? Number(user.business_id) : null;

  const filterValue = searchParams.get("last") || "all";

  const { isPending, data: appointments } = useQuery({
    queryFn: () => getAppointments(businessId, filterValue),
    queryKey: ["appointments", businessId, filterValue],
  });

  return { isPending, appointments };
}
