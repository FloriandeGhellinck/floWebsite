const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`mt-6 inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:text-gray-500  sm:mt-0 sm:w-auto sm:text-sm ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
