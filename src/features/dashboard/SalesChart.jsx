import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { toJalaliDayMonth } from "../../utils/helpers";

function SalesChart({ appointments }) {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("last") || "all";

  let startDate;

  if (filterValue === "all") {
    const firstDate = appointments.length
      ? new Date(
          Math.min(
            ...appointments.map((appointment) =>
              new Date(appointment.created_at).getTime(),
            ),
          ),
        )
      : new Date();
    startDate = firstDate;
  } else {
    startDate = subDays(new Date(), Number(filterValue) - 1);
  }

  const allDates = eachDayOfInterval({
    start: startDate,
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: toJalaliDayMonth(date.toISOString()),
      sales: appointments
        .filter((appointment) =>
          isSameDay(date, new Date(appointment.created_at)),
        )
        .reduce((acc, cur) => acc + cur.servicePrice, 0),
    };
  });

  return (
    <div className="col-span-full flex flex-col gap-7 rounded-xl border border-gray-100 bg-white p-9 [&_.recharts-cartesian-grid-horizontal_line]:stroke-gray-300 [&_.recharts-cartesian-grid-vertical_line]:stroke-gray-300">
      <h2 className="text-2xl font-semibold">
        میزان درامد از {toJalaliDayMonth(allDates.at(0).toISOString())} &mdash;{" "}
        {toJalaliDayMonth(allDates.at(-1).toISOString())}
      </h2>

      <ResponsiveContainer height={400} width="100%">
        <AreaChart data={data} margin={{ top: 10, left: 20, bottom: 45 }}>
          <XAxis
            dataKey="label"
            tick={{ fill: "#374151", angle: -45, textAnchor: "start" }}
            tickLine={{ stroke: "#374151" }}
          />
          <YAxis
            unit="ت"
            tick={{ fill: "#374151", textAnchor: "start" }}
            tickLine={{ stroke: "#374151" }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: "#fff" }} />
          <Area
            dataKey="sales"
            type="monotone"
            stroke={"#16a34a"}
            fill={"#dcfce7"}
            strokeWidth={2}
            name="درامد"
            unit="ت"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
