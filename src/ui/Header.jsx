import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header className="col-span-full flex items-center justify-start gap-9 bg-white px-16 py-4">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
