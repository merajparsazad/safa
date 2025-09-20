import Button from "../../ui/Button";
import SignupForm from "../../features/authentication/SignupForm";
import Modal from "../../ui/Modal";

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="signup-form">
          <Button variant="secondary">ثبت نام</Button>
        </Modal.Open>
        <Modal.Window name="signup-form">
          <SignupForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
