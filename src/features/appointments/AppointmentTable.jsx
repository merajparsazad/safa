import AppointmentRow from "./AppointmentRow";
import { useAppointments } from "./useAppointments";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

function AppointmentTable() {
  const { appointments, isPending } = useAppointments();

  if (!appointments) return <Empty resourceName="نوبتی" />;
  if (isPending) return <Spinner />;

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
          data={appointments}
          render={(appointment) => (
            <AppointmentRow key={appointment.id} appointment={appointment} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default AppointmentTable;
