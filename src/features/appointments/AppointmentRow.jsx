import { IoMdArrowRoundBack } from "react-icons/io";
import Table from "../../ui/Table";
import { toJalali } from "../../utils/helpers";

function AppointmentRow({
  appointment: {
    // id: appointmentId,
    serviceName,
    customerName,
    startTime,
    endTime,
    servicePrice,
    status,
  },
}) {
  return (
    <Table.Row>
      <div className="text-base font-medium text-gray-800">{serviceName}</div>
      <div className="text-base text-gray-800">{customerName}</div>
      <div className="flex items-center gap-1.5 text-base text-gray-800">
        <span>{toJalali(startTime)}</span>
        <IoMdArrowRoundBack className="text-blue-700" />
        <span>{toJalali(endTime, { onlyTime: true })}</span>
      </div>
      <div className="text-base font-medium text-gray-800">
        {servicePrice} تومان
      </div>
      <div
        className={`rounded-4xl px-2 py-1 text-center text-base font-medium ${
          status === "تایید شده"
            ? "bg-green-200 text-green-700"
            : status === "تایید نشده"
              ? "bg-red-200 text-red-700"
              : status === "در انتظار"
                ? "bg-blue-200 text-blue-700"
                : status === "تکمیل شده"
                  ? "bg-gray-200 text-gray-700"
                  : ""
        }`}
      >
        {status}
      </div>
    </Table.Row>
  );
}

export default AppointmentRow;
