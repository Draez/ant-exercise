import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Input } from 'antd';
import colors from '../../../colors';

export const inputBaseOverwriteStyle = css`
  box-shadow: none;
  border-left: none;
  border-radius: 0;
  border-right: none;
  border-top: none;
`;

export const inputOverwriteStyle = css`
  ${inputBaseOverwriteStyle};
  border-bottom: none;
`;

const inputSharedStyles = css`
  ${inputBaseOverwriteStyle};
  border-bottom: 1px solid ${colors.gray06};
  font-style: normal;
  font-weight: normal;
  &[type='number'] {
    background-color: transparent;
  }
  &:hover,
  &:focus {
    ${inputBaseOverwriteStyle};
   
  }
`;

export const StyledInput = styled(Input)`
  ${inputSharedStyles};
  padding-left: 0;

  &.ant-input-group-wrapper {
    &.fat {
      ${inputOverwriteStyle};
      
    }
    input {
      ${inputSharedStyles};
      ${inputOverwriteStyle};
      &:hover,
      &:focus {
        margin-bottom: -1px;
      }
    }
  }
`;

export default StyledInput;
