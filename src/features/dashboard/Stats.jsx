import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ appointments }) {
  const numAppointments = appointments.length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "تکمیل شده",
  );

  const completedPrice = completedAppointments.reduce(
    (acc, cur) => acc + cur.servicePrice,
    0,
  );

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "در انتظار",
  ).length;

const successRate =
  numAppointments > 0
    ? (completedAppointments.length / numAppointments) * 100
    : 0;

  return (
    <>
      <Stat
        title="نوبت‌ها"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numAppointments}
      />
      <Stat
        title="تکمیل شده"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={completedPrice + "ت"}
      />
      <Stat
        title="در انتظار"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={pendingAppointments}
      />
      <Stat
        title="نوبت موفق"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(successRate) + "%"}
      />
    </>
  );
}

export default Stats;
