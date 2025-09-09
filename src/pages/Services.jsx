import AddService from "../features/services/AddService";
import ServiceTable from "../features/services/ServiceTable";

function Services() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">تمامی خدمات</h1>
        <p>فیلتر/مرتب سازی</p>
      </div>

      <div className="flex flex-col gap-3">
        <ServiceTable />
        <AddService />
      </div>
    </>
  );
}

export default Services;
