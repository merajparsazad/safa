import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-12 border-e-2 border-e-gray-200 bg-white px-9 py-12">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
