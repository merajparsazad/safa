function TextArea(props) {
  return (
    <textarea
      {...props}
      className="h-32 w-full rounded border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:ring-1 focus:ring-blue-200 focus:outline-0"
    />
  );
}

export default TextArea;
