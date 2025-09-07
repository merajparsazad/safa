import Button from "../../ui/Button";
import { useState } from "react";
import CreateServiceForm from "./CreateServiceForm";
import { useDeleteService } from "./useDeleteService";

function ServiceRow({ service }) {
  const [showForm, setShowForm] = useState(false);

  const { id: serviceId, name, duration, price, description, image } = service;

  const { isDeleting, deleteService } = useDeleteService();

  return (
    <>
      <div
        role="row"
        className="grid grid-cols-[1fr_1.2fr_1.4fr_1fr_1.4fr_1fr] items-center gap-x-9 px-9 py-6 text-base not-last:border-b not-last:border-solid not-last:border-b-gray-100"
      >
        <img
          src={image}
          alt={name}
          className="block aspect-[3/2] w-16 translate-x-1.5 scale-[1.5] object-cover object-center text-xs"
        />
        <div className="text-[18px] font-semibold text-gray-600">{name}</div>
        <div className="text-sm">
          میانگین زمان مورد نیاز برای انجام {duration} دقیقه
        </div>
        <div className="font-semibold">{price} تومان</div>
        <div className="text-sm">{description}</div>
        <div className="flex flex-col gap-1">
          <Button onClick={() => setShowForm((show) => !show)}>ویرایش</Button>
          <Button
            variant="danger"
            onClick={() => deleteService(serviceId)}
            disabled={isDeleting}
          >
            حذف
          </Button>
        </div>
      </div>
      {showForm && <CreateServiceForm serviceToEdit={service} />}
    </>
  );
}

export default ServiceRow;
