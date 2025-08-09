import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = ''
}) => {
  return (
    <div className={`card ${className}`}>
      {icon && (
        <div className={`card-icon ${iconClassName}`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt={title} />
          ) : (
            icon
          )}
        </div>
      )}
      
      {title && (
        <h3 className={`card-title ${titleClassName}`}>
          {title}
        </h3>
      )}
      
      {description && (
        <p className={`card-description ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string
};

export default Card;