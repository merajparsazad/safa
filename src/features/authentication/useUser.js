import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiAuth";

export function useUser(id) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getCurrentUser(id),
  });
}
