import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextInput = ({ name, onChange, placeholder, value }) => {
  const wrapperClass = 'form-group'

  return (
    <div className={wrapperClass}>
      <div className="field">
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autocomplete="off"
        />
      </div>
    </div>
  )
}

const Input = styled.input`
  width: 100%;
  border: 2px solid #E0E0E0;
  padding: 10px 16px;
  color: #A8A8A8;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border-radius: 2px;
`

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default TextInput
