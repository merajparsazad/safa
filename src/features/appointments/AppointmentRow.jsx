import { IoMdArrowRoundBack } from "react-icons/io";
import Table from "../../ui/Table";
import { toJalali } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  TbClipboardCheck,
  TbSquareRoundedCheck,
  TbSquareRoundedLetterX,
  TbTrash,
} from "react-icons/tb";
import { useUpdateStatus } from "./useUpdateAppointment";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteAppointment } from "./useDeleteAppointment";

function AppointmentRow({
  appointment: {
    id: appointmentId,
    serviceName,
    customerName,
    startTime,
    endTime,
    servicePrice,
    status,
  },
}) {
  const { updateStatus } = useUpdateStatus();
  const { isDeleting, deleteAppointment } = useDeleteAppointment();

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

      <Modal>
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
            <Modal.Open opens="delete">
              <Menus.Button icon={<TbTrash />}>حذف</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="appointment"
            disabled={isDeleting}
            onConfirm={() => deleteAppointment(appointmentId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default AppointmentRow;
