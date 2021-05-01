import React, { useState } from 'react'
import styled from 'styled-components'
import CheckboxInput from '../common/CheckboxInput'
import TextInput from '../common/TextInput'
import Card from '../common/Card'

const list = [
  { text: 'Konopelski Group', value: 'Konopelski-Group', quantity: 9 },
  { text: 'Boyle-LLC', value: 'Boyle-LLC', quantity: 12 },
  { text: 'Hodkiewicz-Inc', value: 'Hodkiewicz-Inc', quantity: 9 },
  { text: 'Dickens-Franecki', value: 'Dickens-Franecki', quantity: 19 },
  { text: 'Bernier-Hane', value: 'Bernier-Hane', quantity: 22 },
  { text: 'McCullough---Lueilwitz', value: 'McCullough---Lueilwitz', quantity: 22 },
  { text: 'Sipes-Inc', value: 'Sipes-Inc', quantity: 22 }
]

const Brands = ({ brand, setBrand }) => {
  const [search, setSearch] = useState(list)
  const handleChange = (val) => {
    const clickedBrand = brand.indexOf(val.target.value)
    const all = [...brand]
    if (clickedBrand === -1) {
      all.push(val.target.value)
    } else {
      all.splice(clickedBrand, 1)
    }
    setBrand(all)
  }

  const searchChange = (event) => {
    const { value } = event.target
    if (value && value.length > 1) {
      setSearch(list.filter((item) => item.value.toLowerCase().indexOf(value) >= 0))
    } else {
      setSearch(list)
    }
  }

  const findChecked = (val) => {
    return brand.findIndex(item => item === val) !== -1
  }

  return (
    <div className="sorting mb-4">
      <Title>Brands</Title>
      <Card>
        <TextInput
          name="brands_search"
          placeholder="Search brand"
          onChange={searchChange}
        />
        <Body>
          {
            search.map((item, index) => (
              <CheckboxInput
                name="brands"
                id={index}
                value={item.value}
                label={item.text}
                quantity={item.quantity}
                checked={findChecked(item.value)}
                onChange={handleChange}
                key={item.value}
              />
            ))
          }
        </Body>
      </Card>
    </div>
  )
}
const Body = styled.div`
  max-height: 214px;
  overflow-y: auto;
  padding: 5px 0px 0px 5px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #697488;
  margin-bottom: 12px;
`

export default Brands
