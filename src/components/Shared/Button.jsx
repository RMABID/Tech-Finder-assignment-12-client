const Button = ({ text, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          flex items-center
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          px-4
          w-full
          ${outline ? "bg-white" : "bg-lime-500"}
          ${outline ? "border-black" : "border-lime-500"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "py-1" : "py-3"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {Icon && <Icon size={24} className="flex items-center" />}
      {text}
    </button>
  );
};

export default Button;
