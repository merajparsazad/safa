function Stat({ icon, title, value, color }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    indigo: "bg-indigo-100 text-indigo-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="grid grid-cols-[4.5rem_1fr] grid-rows-[auto_auto] gap-x-6 gap-y-2 rounded-xl border border-gray-100 bg-white p-6">
      <div
        className={`row-span-full flex aspect-square items-center justify-center rounded-full ${colorClasses[color]} [&>svg]:h-10 [&>svg]:w-10`}
      >
        {icon}
      </div>

      <h5 className="self-end text-base font-semibold text-gray-500">
        {title}
      </h5>

      <p className="text-xl leading-none font-medium">{value}</p>
    </div>
  );
}

export default Stat;
