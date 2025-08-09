import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  disabled = false, 
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-full transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-[#f1e811] text-black hover:bg-[#ddd406] disabled:bg-gray-400',
    secondary: 'bg-[#4e9883] text-white hover:bg-[#3a7262] disabled:bg-gray-400',
    outline: 'border border-[#f1e811] text-[#f1e811] hover:bg-[#f1e811]/10 disabled:border-gray-400 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'cursor-not-allowed' : ''}`;
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;