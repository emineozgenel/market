import React from 'react'
import styled from 'styled-components'

const ItemTypes = () => {
  return (
    <div className="types">
      <ul className="d-flex pl-0">
        <Item className="mr-2 active">mug</Item>
        <Item className="mr-2">shirt</Item>
      </ul>
    </div>
  )
}
const Item = styled.li`
  border-radius: 2px; 
  background-color: #F2F0FD;
  color: #1EA4CE;
  font-size: 13px;
  padding: 6px 16px;
  font-weight: 600;
  &.active {
    background-color: #1EA4CE;
    color: #fff;
  }
`
export default ItemTypes
