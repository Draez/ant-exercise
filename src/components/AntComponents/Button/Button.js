import React from 'react';
import { StyledButton, Wrapper } from './styles';

type ButtonTypes = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';

type Props = {
  /**
   * Option to fit button width to its parent width
   */
  block?: boolean,
  /**
   * Basically button text
   */
  children?: any,
  /**
   * Set the danger status of button
   */
  danger?: boolean,
  /**
   * Disabled state of button
   */
  disabled?: boolean,
  /**
   * 	Set the loading status of button
   */
  loading?: boolean,
  /**
   * Click handler
   */
  onClick: Function,
  /**
   * Can be set button shape
   */
  shape?: 'circle' | 'round' | '',
  /**
   * There are 6 types of Button:
   */
  type?: ButtonTypes,
};
const Button = (props: Props) => {
  const { children, ...buttonProps } = props;
  return (
    <Wrapper>
      <StyledButton {...buttonProps}>{children}</StyledButton>
    </Wrapper>
  );
};

Button.defaultProps = {
  block: false,
  children: null,
  danger: false,
  disabled: false,
  loading: false,
  shape: '',
  type: 'default',
};

export default Button;
