import AppointmentRow from "./AppointmentRow";
import { useAppointments } from "./useAppointments";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

function AppointmentTable() {
  const { appointments, isPending } = useAppointments();
  const [searchParams] = useSearchParams();

  if (!appointments) return <Empty resourceName="نوبتی" />;
  if (isPending) return <Spinner />;

  // FILTER
  const filterValue = searchParams.get("status") || "all";

  let filteredAppointments;
  if (filterValue === "all") filteredAppointments = appointments;
  if (filterValue === "confirmed")
    filteredAppointments = appointments.filter(
      (appointment) => appointment.status === "تایید شده",
    );
  if (filterValue === "unconfirmed")
    filteredAppointments = appointments.filter(
      (appointment) => appointment.status === "تایید نشده",
    );
  if (filterValue === "pending")
    filteredAppointments = appointments.filter(
      (appointment) => appointment.status === "در انتظار",
    );
  if (filterValue === "completed")
    filteredAppointments = appointments.filter(
      (appointment) => appointment.status === "تکمیل شده",
    );

  // SORT
  const sortBy = searchParams.get("sortBy") || "customerName-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB, "fa") * modifier;
    }

    return (valueA - valueB) * modifier;
  });

  return (
    <Menus>
      <Table columns="1fr 1fr 2fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div>خدمت</div>
          <div>مشتری</div>
          <div>تاریخ نوبت</div>
          <div>بها</div>
          <div>وضعیت</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedAppointments}
          render={(appointment) => (
            <AppointmentRow key={appointment.id} appointment={appointment} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default AppointmentTable;
