import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RadioInput = ({ name, label, checked = false, onChange, value }) => {
  return (
    <Item>
      <RadioButton
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioButtonLabel />
      <Title>{label}</Title>
    </Item>
  )
}

const Item = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom:18px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`
const Title = styled.div`
  line-height:20px;
  color: #525252;
`

const RadioButtonLabel = styled.span`
  position: absolute;
  top: 0;
  left: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  border: 2px solid #DFDEE2;
`
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  &:checked + ${RadioButtonLabel} {
    border-color: #1EA4CE;
    &::after {
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='rgb(30 164 206)' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'%3E%3C/path%3E%3C/svg%3E%0A");
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin: 1px;
    }
  }
`

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
export default RadioInput
