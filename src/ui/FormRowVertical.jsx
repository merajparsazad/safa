function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col gap-3 py-4">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-base text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
