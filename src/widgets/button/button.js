import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import classes from './button.module.scss';

const Button = forwardRef(function Button(
  {
    size,
    shape,
    color,
    variant,
    isEnabled,
    isActive,
    onClick,
    className,
    style,
    children,
    ...props
  },
  ref
) {
  const handleClick = (event) => {
    event.currentTarget.blur();
    onClick && onClick(event);
  };

  return (
    <button
      disabled={!isEnabled}
      onClick={handleClick}
      className={classNames(
        classes.button,
        classes[size],
        classes[shape],
        classes[color],
        classes[variant],
        { [classes.active]: isActive },
        className
      )}
      style={style}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
Button.shapes = ['rectangle', 'square', 'round'];
Button.colors = [
  'default',
  'primary',
  'secondary',
  'danger',
  'warning',
  'info',
  'orange',
  'link',
];
Button.variants = [
  'filled',
  'outline',
  'inverted',
  'darkBackground',
  'lightBackground',
];

Button.propTypes = {
  size: PropTypes.oneOf(Button.sizes).isRequired,
  shape: PropTypes.oneOf(Button.shapes).isRequired,
  color: PropTypes.oneOf(Button.colors).isRequired,
  variant: PropTypes.oneOf(Button.variants).isRequired,
  isEnabled: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'md',
  shape: 'rectangle',
  color: 'default',
  variant: 'filled',
  isEnabled: true,
  isActive: false,
};

export default Button;
