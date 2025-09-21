import CreateServiceForm from "./CreateServiceForm";
import { useDeleteService } from "./useDeleteService";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbPencil, TbTrash } from "react-icons/tb";
import { useCreateService } from "./useCreateService";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useAuth } from "../authentication/AuthContext";

function ServiceRow({ service }) {
  const { isDeleting, deleteService } = useDeleteService();
  const { isCreating, createService } = useCreateService();
  const { user } = useAuth();
  const businessId =
    user?.business_role === true ? Number(user.business_id) : null;

  const { id: serviceId, name, duration, price, description, image } = service;

  function handleDuplicate() {
    createService({
      business_id: businessId,
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
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={serviceId} />

              <Menus.List id={serviceId}>
                <Menus.Button
                  icon={<HiOutlineSquare2Stack />}
                  onClick={handleDuplicate}
                  disabled={isCreating}
                >
                  کپی
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<TbPencil />}>ویرایش</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<TbTrash />}>حذف</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="edit">
              <CreateServiceForm serviceToEdit={service} />
            </Modal.Window>

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
