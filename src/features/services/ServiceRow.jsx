import Button from "../../ui/Button";
import CreateServiceForm from "./CreateServiceForm";
import { useDeleteService } from "./useDeleteService";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbPencil, TbTrash } from "react-icons/tb";
import { useCreateService } from "./useCreateService";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

function ServiceRow({ service }) {
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
      <Table.Row>
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

          <Modal>
            <Modal.Open opens="edit">
              <Button>
                <TbPencil />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateServiceForm serviceToEdit={service} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <Button variant="danger">
                <TbTrash />
              </Button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="services"
                disabled={isDeleting}
                onConfirm={() => deleteService(serviceId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default ServiceRow;
