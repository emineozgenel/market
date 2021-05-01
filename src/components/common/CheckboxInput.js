import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckboxInput = ({ id, value, name, label, checked = false, quantity, onChange }) => (
  <Wrapper>
    <Label htmlFor={`${name}${id}Checkbox`}>
      <span>{label} <Quantity>({quantity})</Quantity></span>
      <Input
        id={`${name}${id}Checkbox`}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  </Wrapper>
)

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 10px;
`
const Quantity = styled.span`
  color: #A8A8A8;
  padding-left: 4px;
`

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 40px;
  color: #525252;
`

const Indicator = styled.div`
  width: 22px;
  height: 22px;
  background: #fff;
  position: absolute;
  top: 0em;
  left: -38px;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }
  ${Input}:checked + & {
    background: #1EA4CE;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 4px;
    left: 7px;
    width: 25%;
    height: 50%;
    border: solid #fff;
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg);
  }

  &::disabled {
    cursor: not-allowed;
  }
`

CheckboxInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default CheckboxInput
