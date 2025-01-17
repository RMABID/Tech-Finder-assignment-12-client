const Button = ({ text, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          flex items-center
          disabled:opacity-70
          disabled:cursor-not-allowed      
          hover:opacity-80
          transition
        gap-2
          w-full
          ${
            outline ? "bg-white py-2 border-2 rounded-full px-2" : "bg-lime-500"
          }
          ${outline ? "border-black" : "border-lime-500"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "font-light" : "font-semibold"}
          ${
            small
              ? "w-20 h-14 rounded-full text-md ml-2 bg-[#003480] px-12 border-[1px]"
              : ""
          }
        `}
    >
      {Icon && <Icon size={16} className="flex  items-center" />}
      {text}
    </button>
  );
};

export default Button;
