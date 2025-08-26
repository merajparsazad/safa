import { TbMoon, TbSun } from "react-icons/tb";
import Button from "./Button";

function DarkModeToggle() {
  const isDark = false;

  return (
    <Button variant="icon">
      {isDark ? (
        <TbMoon className="h-8 w-8 text-black" />
      ) : (
        <TbSun className="h-8 w-8 text-yellow-500" />
      )}
    </Button>
  );
}

export default DarkModeToggle;
