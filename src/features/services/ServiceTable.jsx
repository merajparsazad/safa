import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ServiceRow from "./ServiceRow";
import { useServices } from "./useServices";
import Empty from "../../ui/Empty";

function ServiceTable() {
  const { isPending, services } = useServices();
  const [searchParams] = useSearchParams();

  if (!services) return <Empty resourceName="خدمتی" />;
  if (isPending) return <Spinner />;

  // FILTER
  const filterValue = searchParams.get("duration") || "all";

  let filteredServices;
  if (filterValue === "all") filteredServices = services;
  if (filterValue === "under-31")
    filteredServices = services.filter((service) => service.duration < 31);
  if (filterValue === "over-31")
    filteredServices = services.filter((service) => service.duration >= 31);

  // SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedServices = filteredServices.sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB, "fa") * modifier;
    }

    return (valueA - valueB) * modifier;
  });

  return (
    <Menus>
      <Table columns="1fr 1.2fr 1.4fr 1fr 2fr 0.2fr">
        <Table.Header role="row">
          <div></div>
          <div>خدمت</div>
          <div>مدت زمان</div>
          <div>بها</div>
          <div>توضیحات</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedServices}
          render={(service) => (
            <ServiceRow service={service} key={service.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ServiceTable;
