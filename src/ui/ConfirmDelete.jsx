import Button from "./Button";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex w-[40rem] flex-col gap-4">
      <h3 className="text-2xl font-medium">حذف {resourceName}</h3>

      <p className="mb-4 text-gray-500">
        مطمئنی که میخوای {resourceName} را برای همیشه حذف کنی? این عمل برگشت پذیر نیست!
      </p>

      <div className="flex justify-end gap-4">
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          انصراف
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          حذف
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
