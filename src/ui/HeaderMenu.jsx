import Button from "./Button";
import { TbUser } from "react-icons/tb";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex w-full items-center justify-between gap-3">
      <li>
        <Button variant="icon" onClick={() => navigate("/account")}>
          <TbUser className="h-8 w-8 text-blue-600" />
        </Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
      <li className="grow">
        <SearchBar />
      </li>
    </ul>
  );
}

export default HeaderMenu;
