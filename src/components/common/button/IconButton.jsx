import Button from './Button';

const IconButton = ({ children, icon, className = '', ...props }) => (
  <Button 
    variant="icon" 
    className={`gap-2 ${className}`} 
    {...props}
  >
    {children}
    {icon}
  </Button>
);

export default IconButton;