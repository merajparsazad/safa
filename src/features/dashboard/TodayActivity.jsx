import { getToday } from "../../utils/helpers";
import TodayItem from "./TodayItem";

function TodayActivity({ appointments }) {
  const startOfToday = getToday();
  const endOfToday = getToday({ end: true });

  const todayAppointments = appointments.filter((appointment) => {
    const startDate = new Date(appointment.startTime);
    return startDate >= startOfToday && startDate <= endOfToday;
  });

  return (
    <div className="col-span-2 col-start-3 flex flex-col gap-7 rounded-md border border-gray-100 bg-white p-11 pt-7">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">امروز</h2>
      </div>

      {todayAppointments.length > 0 ? (
        <ul className="overflow-x-hidden overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
          {todayAppointments.map((appointment) => (
            <TodayItem appointment={appointment} key={appointment.id} />
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-center text-xl font-medium">
          هیچ نوبتی یافت نشد!
        </p>
      )}
    </div>
  );
}

export default TodayActivity;
