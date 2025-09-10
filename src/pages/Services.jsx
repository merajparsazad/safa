import AddService from "../features/services/AddService";
import ServiceTable from "../features/services/ServiceTable";
import ServiceTableOperations from "../features/services/ServiceTableOperations";

function Services() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">تمامی خدمات</h1>
        <ServiceTableOperations />
      </div>

      <div className="flex flex-col gap-3">
        <ServiceTable />
        <AddService />
      </div>
    </>
  );
}

export default Services;
