const Card = ({ icon, title, description, className = '', hoverEffect = true, children }) => {
  return (
    <div 
      className={`
        bg-[#F3F3F3] w-full flex flex-col items-center 
        max-w-[240px] lg:w-[300px] min-h-[180px] p-4 rounded-xl 
        transition-all duration-300
        ${hoverEffect ? 'hover:shadow-2xl' : ''}
        ${className}
      `}
    >
      {icon && (
        <div className="h-12 w-12 rounded-full p-2 bg-white">
          <img src={icon} alt={title || 'Card icon'} className="h-full w-full object-contain" />
        </div>
      )}
      {title && <h3 className="text-md mt-2 font-bold text-center">{title}</h3>}
      {description && <p className="text-sm text-gray-700 text-center">{description}</p>}
      {children}
    </div>
  );
};

export default Card;