import Button from "../../ui/Button";
import { useState } from "react";
import CreateServiceForm from "./CreateServiceForm";
import { useDeleteService } from "./useDeleteService";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbPencil, TbTrash } from "react-icons/tb";
import { useCreateService } from "./useCreateService";

function ServiceRow({ service }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteService } = useDeleteService();
  const { isCreating, createService } = useCreateService();

  const { id: serviceId, name, duration, price, description, image } = service;

  function handleDuplicate() {
    createService({
      business_id: 101,
      name: `کپی از ${name}`,
      duration,
      price,
      description,
      image,
    });
  }

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
        <div className="flex flex-row gap-1">
          <Button onClick={handleDuplicate} disabled={isCreating}>
            <HiOutlineSquare2Stack />
          </Button>
          <Button onClick={() => setShowForm((show) => !show)}>
            <TbPencil />
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteService(serviceId)}
            disabled={isDeleting}
          >
            <TbTrash />
          </Button>
        </div>
      </div>
      {showForm && <CreateServiceForm serviceToEdit={service} />}
    </>
  );
}

export default ServiceRow;
