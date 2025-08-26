const Button = ({
  children,
  onClick,
  variant = "primary",
  type,
  disabled = false,
  className = "",
}) => {
  const baseStyle = `
    cursor-pointer rounded-md text-sm font-medium transition-colors duration-300 disabled:cursor-not-allowed sm:text-base md:text-base
  `;

  const variants = {
    primary:
      "bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400 sm:px-2 sm:py-1 md:px-3 md:py-2",
    secondary:
      "bg-gray-200 px-3 py-2 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 sm:px-2 sm:py-1 md:px-3 md:py-2",
    icon: "border-none bg-none p-2 hover:bg-gray-100 sm:p-3 md:p-4",
    danger:
      "bg-red-500 px-3 py-2 text-white hover:bg-red-600 disabled:bg-red-200 sm:px-2 sm:py-1 md:px-3 md:py-2",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
