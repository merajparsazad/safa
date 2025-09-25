import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function prepareData(appointments) {
  const serviceCount = {};

  appointments.forEach((appt) => {
    const name = appt.serviceName;
    serviceCount[name] = (serviceCount[name] || 0) + 1;
  });

  const colors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#14b8a6",
    "#3b82f6",
    "#a855f7",
  ];

  return Object.entries(serviceCount).map(([serviceName, value], i) => ({
    serviceName,
    value,
    color: colors[i % colors.length],
  }));
}

function ServiceUsageChart({ appointments }) {
  const data = prepareData(appointments);

  return (
    <div className="col-span-2 col-start-1 flex flex-col gap-7 rounded-md border border-gray-100 bg-white px-11 py-8 first:mb-6 [&_.recharts-pie-label-text]:font-semibold">
      <h2 className="text-2xl font-semibold">
        تعداد دفعات استفاده از سرویس‌ها
      </h2>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%">
          <PieChart>
            <Pie
              data={data}
              nameKey="serviceName"
              dataKey="value"
              innerRadius={85}
              outerRadius={110}
              cx="40%"
              cy="50%"
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.serviceName}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              width="30%"
              layout="vertical"
              iconSize={15}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="mt-3 text-center text-xl font-medium">
          هیچ نوبتی یافت نشد!
        </p>
      )}
    </div>
  );
}

export default ServiceUsageChart;
