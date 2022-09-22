import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  //remove sự kiện khi sử dụng disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    disable,
    rounded,
    small,
    large,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

    </Comp>
  );
}
