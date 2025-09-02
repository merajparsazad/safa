function FileInput(props) {
  return (
    <input
      type="file"
      {...props}
      className="file:font-inherit file:text-blue-50 file:bg-blue-600 hover:file:bg-blue-700 rounded-sm text-base file:me-4 file:cursor-pointer file:rounded-sm file:border-0 file:px-3 file:py-2 file:font-medium file:duration-200 file:transition-colors"
    />
  );
}

export default FileInput;
