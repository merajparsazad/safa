import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useRecentAppointments } from "./useRecentAppointments";

function DashboardLayout() {
  const { appointments, isPending } = useRecentAppointments();

  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_24rem_auto] gap-9">
      <Stats appointments={appointments} />
    </div>
  );
}

export default DashboardLayout;
