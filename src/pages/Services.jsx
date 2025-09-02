import { useState } from "react";
import ServiceTable from "../features/services/ServiceTable";
import Button from "../ui/Button";
import CreateServiceForm from "../features/services/CreateServiceForm";

function Services() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">تمامی خدمات</h1>
        <p>فیلتر/مرتب سازی</p>
      </div>

      <div className="flex flex-col gap-3">
        <ServiceTable />

        <Button onClick={() => setShowForm((show) => !show)}>خدمت جدید</Button>
        {showForm && <CreateServiceForm />}
      </div>
    </>
  );
}

export default Services;
