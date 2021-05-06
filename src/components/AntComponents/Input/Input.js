// @flow
import React from 'react';
import type { Node } from 'react';
import StyledInput from './styles';

type Props = {
  /**
   * The label text displayed after (on the right side of) the input field
   */
  addonAfter?: ?Node,
  /**
   * The label text displayed before (on the left side of) the input field
   */
  addonBefore?: ?Node,
  /**
   * If allow to remove input content with clear icon
   */
  allowClear?: boolean,
  /**
   * The initial input content
   */
  defaultValue?: string,
  /**
   * Whether the input is disabled
   */
  disabled?: boolean,
  /**
   * Callback when user input
   */
  onChange: Function,
  /**
   * The callback function that is triggered when Enter key is pressed
   */
  onPressEnter?: Function,
  /**
   * The prefix icon for the Input
   */
  prefix?: ?Node,
  /**
   * The size of the input box. Note: in the context of a form, the large size is used
   */
  size?: 'large' | 'middle' | 'small',
  /**
   * The suffix icon for the Input
   */
  suffix?: ?Node,
  /**
   * The type of input, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) (use Input.TextArea instead of type="textarea")
   */
  type?: string,
};

const InputComponent = (props: Props) => <StyledInput {...props} />;

InputComponent.defaultProps = {
  addonAfter: null,
  addonBefore: null,
  allowClear: false,
  defaultValue: '',
  disabled: false,
  onPressEnter: () => {},
  prefix: null,
  size: 'middle',
  suffix: null,
  type: 'text',
};

export default InputComponent;
