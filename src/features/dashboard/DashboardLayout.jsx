import Spinner from "../../ui/Spinner";
import SalesChart from "./SalesChart";
import ServiceUsageChart from "./ServiceUsageChart";
import Stats from "./Stats";
import TodayActivity from "./TodayActivity";
import { useRecentAppointments } from "./useRecentAppointments";

function DashboardLayout() {
  const { appointments, isPending } = useRecentAppointments();

  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_24rem_auto] gap-9">
      <Stats appointments={appointments} />
      <ServiceUsageChart appointments={appointments} />
      <TodayActivity appointments={appointments} />
      <SalesChart appointments={appointments} />
    </div>
  );
}

export default DashboardLayout;
