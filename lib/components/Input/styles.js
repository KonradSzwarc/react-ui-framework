import styled from 'styled-components';

const getColor = ({ focused, error, pristine }) => (!pristine && error && !focused)
  ? 'var(--error)'
  : (focused)
    ? 'var(--primary2)'
    : 'var(--grey3)';

export default styled.div`
  z-index: 0;
  position: relative;
  border-radius: 4px;
  margin: var(--space-md) 0 var(--space-lg);
  width: 256px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .border {
    overflow: hidden;
    box-sizing: content-box;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1px var(--grey3);
    border-radius: 4px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: ${props => getColor(props)};
      width: ${props => props.focused || (!props.pristine && props.error) ? '60%' : 0};;
      height: ${props => props.focused || (!props.pristine && props.error) ? '100%' : 0};;
      transition: all 0.3s var(--ease-in-out);
      border-radius: 4px;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      right: 0;
      bottom: 0;
    }

    > div:first-child {
      z-index: 2;
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      border-radius: 3px;
      background-color: #fff;
    }
  }

  label {
    z-index: 2;
    position: absolute;
    top: ${props => (props.focused || props.filled) ? '-7px' : 'calc(50% - 7px)'};
    left: var(--space-md);
    cursor: ${props => (props.focused || props.filled) ? 'default' : 'text'};
    font-size: ${props => (props.focused || props.filled) ? 'var(--font-xs)' : 'var(--font-md)'};
    color: ${props => getColor(props)};
    font-weight: ${props => (props.focused || props.filled) ? 'var(--bold)' : 'var(--normal)'};
    line-height: 16px;
    transition: all 0.3s var(--ease-in-out);

    &::before,
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: calc(50% - 1px);
      width: 100%;
      background-color: #fff;
      height: 2px;
      transition: all 0.3s var(--ease-in-out) 0.1s;
    }

    &::before {
      left: ${props => (props.focused || props.filled) ? 'var(--space-sm)' : 0};
    }

    &::after {
      right: ${props => (props.focused || props.filled) ? 'var(--space-sm)' : 0};
    }
  }

  input {
    z-index: 3;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 2px;
    font-size: var(--font-md);
    color: var(--grey2);
    padding: 0 var(--space-md);
    background-color: transparent;
  }

  .error {
    position: absolute;
    visibility: ${props => props.error && !props.pristine ? 'visible' : 'hidden'};
    top: ${props => props.error && !props.pristine ? '40px' : 0};
    left: var(--space-xs);
    font-size: var(--font-xs);
    color: ${props => props.focused ? 'var(--grey3)' : 'var(--error)'};
    font-weight: var(--normal);
    transition: all 0.3s var(--ease-in-out);
  }
`;