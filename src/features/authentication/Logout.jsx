import Button from "../../ui/Button";
import { TbDoorExit } from "react-icons/tb";

function Logout() {
  return (
    <Button variant="icon" disabled={false} onClick={() => {}}>
      <TbDoorExit className="h-8 w-8 text-red-600" />
    </Button>
  );
}

export default Logout;
