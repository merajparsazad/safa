import Button from "../../ui/Button";
import CreateServiceForm from "../../features/services/CreateServiceForm";
import Modal from "../../ui/Modal";

function AddService() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="service-form">
          <Button>خدمت جدید</Button>
        </Modal.Open>
        <Modal.Window name="service-form">
          <CreateServiceForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddService;
