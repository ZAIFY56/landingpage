import Button from './Button';

const OutlineButton = ({ children, className = '', ...props }) => (
  <Button 
    variant="outline" 
    className={`px-6 py-3 ${className}`} 
    {...props}
  >
    {children}
  </Button>
);

export default OutlineButton;