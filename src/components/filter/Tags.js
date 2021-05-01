import React, { useState } from 'react'
import styled from 'styled-components'
import CheckboxInput from '../common/CheckboxInput'
import Card from '../common/Card'
import TextInput from '../common/TextInput'

const list = [
  { text: 'Trees', value: 'Trees', quantity: 2 },
  { text: 'Beach', value: 'Beach', quantity: 9 },
  { text: 'Person', value: 'Person', quantity: 12 },
  { text: 'Woman', value: 'Woman', quantity: 9 },
  { text: 'Meadow', value: 'Meadow', quantity: 19 },
  { text: 'Coffee', value: 'Coffee', quantity: 22 },
  { text: 'Dock', value: 'Dock', quantity: 22 },
  { text: 'Ocean', value: 'Ocean', quantity: 22 },
  { text: 'Sunset', value: 'Sunset', quantity: 22 },
  { text: 'Snow', value: 'Snow', quantity: 22 }
]

const Tags = ({ tag, setTag }) => {
  const [search, setSearch] = useState(list)

  const handleChange = (val) => {
    const clickedTags = tag.indexOf(val.target.value)
    const all = [...tag]
    if (clickedTags === -1) {
      all.push(val.target.value)
    } else {
      all.splice(clickedTags, 1)
    }
    setTag(all)
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
    return tag.findIndex(item => item === val) !== -1
  }

  return (
    <div className="sorting mb-4">
      <Title>Tags</Title>
      <Card>
        <TextInput
          name="tags_search"
          placeholder="Search tag"
          onChange={searchChange}
        />
        <Body>

          {
            search.map((item, index) => (
              <CheckboxInput
                name="tags"
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

export default Tags
