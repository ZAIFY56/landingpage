const Button = ({ 
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-md transition-colors duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-[#4B9795] text-white hover:bg-[#3a7a78]',
    outline: 'bg-white text-[#4B9795] border-2 border-[#4B9795] hover:bg-[#f0f9f9]',
    icon: 'bg-[#4B9795] text-white p-4 hover:bg-[#3a7a78]'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;