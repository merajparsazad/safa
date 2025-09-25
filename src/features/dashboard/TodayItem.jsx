import { IoMdArrowRoundBack } from "react-icons/io";
import { toJalali } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import {
  TbClipboardCheck,
  TbSquareRoundedCheck,
  TbSquareRoundedLetterX,
} from "react-icons/tb";
import { useUpdateStatus } from "../appointments/useUpdateAppointment";

function TodayItem({
  appointment: {
    id: appointmentId,
    serviceName,
    customerName,
    startTime,
    endTime,
    status,
  },
}) {
  const { updateStatus } = useUpdateStatus();

  return (
    <li className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center gap-x-9 py-4 text-base not-last:border-b not-last:border-b-gray-100">
      <div className="text-base font-medium text-gray-800">{serviceName}</div>
      <div>
        <div className="text-base text-gray-800">{customerName}</div>
        <div className="flex items-center gap-1.5 text-base text-gray-800">
          <span>{toJalali(startTime, { onlyTime: true })}</span>
          <IoMdArrowRoundBack className="text-blue-700" />
          <span>{toJalali(endTime, { onlyTime: true })}</span>
        </div>
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

      {status !== "تکمیل شده" && (
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={appointmentId} />
              <Menus.List id={appointmentId}>
                {status === "در انتظار" && (
                  <Menus.Button
                    icon={<TbSquareRoundedCheck />}
                    onClick={() =>
                      updateStatus({ appointmentId, status: "تایید شده" })
                    }
                  >
                    تایید
                  </Menus.Button>
                )}
                {(status === "در انتظار" || status === "تایید شده") && (
                  <Menus.Button
                    icon={<TbSquareRoundedLetterX />}
                    onClick={() =>
                      updateStatus({ appointmentId, status: "تایید نشده" })
                    }
                  >
                    عدم تایید
                  </Menus.Button>
                )}
                {(status === "تایید شده" || status === "در انتظار") && (
                  <Menus.Button
                    icon={<TbClipboardCheck />}
                    onClick={() =>
                      updateStatus({ appointmentId, status: "تکمیل شده" })
                    }
                  >
                    تکمیل
                  </Menus.Button>
                )}
              </Menus.List>
            </Menus.Menu>
          </Menus>
        </Modal>
      )}
    </li>
  );
}

export default TodayItem;
