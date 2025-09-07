import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../api/apiServices";

export function useServices() {
  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return { isPending, error, services };
}
