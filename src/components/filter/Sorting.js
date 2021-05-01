import React from 'react'
import styled from 'styled-components'
import RadioInput from '../common/RadioInput'
import Card from '../common/Card'

const list = [
  { text: 'Price low to high', value: '_sort=price&_order=desc' },
  { text: 'Price high to low', value: '_sort=price&_order=asc' },
  { text: 'Name to Z-A', value: '_sort=name&_order=desc' },
  { text: 'Name to A-Z', value: '_sort=name&_order=asc' }
]

const Sorting = ({ sort, setSort }) => {
  const handleChange = (val) => {
    setSort(val.target.value)
  }

  return (
    <div className="sorting mb-4">
      <Title>Sorting</Title>
      <Card>
        {
          list.map((item, index) => (
            <RadioInput
              name="sorting"
              label={item.text}
              checked={sort === item.value}
              onChange={handleChange}
              value={item.value}
              key={index}
            />
          ))
        }
      </Card>
    </div>
  )
}

const Title = styled.h3`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #697488;
  margin-bottom: 12px;
`

export default Sorting
