import AppointmentTable from "../features/appointments/AppointmentTable";
import AppointmentTableOperations from "../features/appointments/AppointmentTableOperations";

function Appointments() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">تمامی نوبت‌ها</h1>
        <AppointmentTableOperations />
      </div>

      <AppointmentTable />
    </>
  );
}

export default Appointments;
