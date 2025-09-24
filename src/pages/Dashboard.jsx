import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">داشبورد</h1>
        <DashboardFilter />
      </div>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
