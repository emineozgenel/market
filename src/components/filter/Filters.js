import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loadProducts, setFilter } from '../../redux/actions/productActions'
import Sorting from './Sorting'
import Brands from './Brands'
import Tags from './Tags'

const Filters = ({ loadProducts, setFilter }) => {
  const [sort, setSort] = useState('')
  const [brand, setBrand] = useState([])
  const [tag, setTag] = useState([])

  useEffect(() => {
    const filters = { sort, brand, tag }
    setFilter(filters)
    loadProducts(1)
  }, [sort, brand, tag, loadProducts, setFilter])

  return (
    <div className="filters">
      <Sorting sort={sort} setSort={setSort} />
      <Brands brand={brand} setBrand={setBrand} />
      <Tags tag={tag} setTag={setTag} />
    </div>
  )
}

const mapDispatchToProps = {
  loadProducts,
  setFilter
}

export default connect(
  null,
  mapDispatchToProps
)(Filters)
