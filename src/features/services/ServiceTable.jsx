import Spinner from "../../ui/Spinner";
import ServiceRow from "./ServiceRow";
import { useServices } from "./useServices";

function ServiceTable() {
  const { isPending, services } = useServices();

  if (isPending) return <Spinner />;

  return (
    <div
      role="table"
      className="overflow-hidden rounded-md border border-solid border-gray-200 bg-white text-xl"
    >
      <header
        role="row"
        className="grid grid-cols-[1fr_1.2fr_1.4fr_1fr_1.4fr_1fr] items-center gap-x-9 border-b border-solid border-b-gray-100 bg-gray-50 px-9 py-6 font-semibold text-gray-600"
      >
        <div></div>
        <div>خدمت</div>
        <div>مدت زمان</div>
        <div>بها</div>
        <div>توضیحات</div>
        <div></div>
      </header>
      {services
        .filter((service) => service.business_id === 101)
        .map((service) => (
          <ServiceRow service={service} key={service.id} />
        ))}
    </div>
  );
}

export default ServiceTable;
