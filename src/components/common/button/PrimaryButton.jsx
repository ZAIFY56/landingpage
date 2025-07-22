import Button from './Button';

const PrimaryButton = ({ children, className = '', ...props }) => (
  <Button 
    variant="primary" 
    className={`px-6 py-3 ${className}`} 
    {...props}
  >
    {children}
  </Button>
);

export default PrimaryButton;