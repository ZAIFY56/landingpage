import Button from './Button';

const LinkButton = ({ children, className = '', ...props }) => (
  <Button 
    variant="link" 
    className={`text-yellow-500 hover:text-yellow-600 px-0 py-0 bg-transparent border-none ${className}`} 
    {...props}
  >
    {children}
  </Button>
);

export default LinkButton;
