import styled from '@emotion/styled';
import { Button } from 'antd';
import colors from '../../../colors';

export const StyledButton = styled(Button)``;
export const Wrapper = styled.span`
    .ant-btn-default {
        border-color: ${colors.gray05};
        color: ${colors.gray09};
        background: #FFF;

        &:hover, &:focus  {
            color: ${colors.blue07};
        }

        &:active {
            border: 1px solid ${colors.blue08};
            color: ${colors.blue08};
        }

        &.ant-btn-default[disabled] {
            background: ${colors.gray03};
            border: 1px solid ${colors.gray05};
            color: ${colors.gray06};
        }
    }

    .ant-btn-primary {
        border: 0;

        &:hover, &:focus {
            background: ${colors.blue07};
        }

        &:active, &:visited {
            background: ${colors.blue08};
        }

        &.ant-btn-primary[disabled] {
            background: ${colors.gray03};
            border: 1px solid ${colors.gray05};
            color: ${colors.gray06};
        }
    }
`;
export default StyledButton;
