import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ServiceRow from "./ServiceRow";
import { useServices } from "./useServices";

function ServiceTable() {
  const { isPending, services } = useServices();

  if (isPending) return <Spinner />;

  return (
    <Table columns="1fr 1.2fr 1.4fr 1fr 1.4fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>خدمت</div>
        <div>مدت زمان</div>
        <div>بها</div>
        <div>توضیحات</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={services.filter((service) => service.business_id === 101)}
        render={(service) => <ServiceRow service={service} key={service.id} />}
      />
    </Table>
  );
}

export default ServiceTable;
