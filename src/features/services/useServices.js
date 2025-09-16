import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../api/apiServices";
import { useAuth } from "../authentication/AuthContext";

export function useServices() {
  const { user } = useAuth();
  const businessId =
    user?.business_role === true ? Number(user.business_id) : null;

  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services", businessId],
    queryFn: () => getServices(businessId),
    enabled: !!businessId,
  });

  return { isPending, error, services };
}
