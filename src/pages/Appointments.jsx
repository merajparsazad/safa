import AppointmentTable from "../features/appointments/AppointmentTable";

function Appointments() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">تمامی نوبت‌ها</h1>
      </div>

      <AppointmentTable />
    </>
  );
}

export default Appointments;
