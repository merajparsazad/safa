import Button from "../../ui/Button";
import { TbDoorExit } from "react-icons/tb";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  return (
    <Button variant="icon" disabled={false} onClick={handleLogout}>
      <TbDoorExit className="h-8 w-8 text-red-600" />
    </Button>
  );
}

export default Logout;
