import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProducts } from '../../redux/actions/productActions'
import Container from '../common/Container'
import Spinner from '../common/Spinner'
import { device } from '../common/Device'
import ProductItem from './ProductItem'
import Filters from '../filter/Filters'
import ItemTypes from '../filter/ItemTypes'
import Basket from '../basket/Basket'
import right from '../../assets/arrow-right.svg'
import left from '../../assets/arrow-left.svg'

const ProductList = ({ loading, products, currentPage, loadProducts }) => {
  useEffect(() => {
    if (products.length === 0 && !products.page) {
      loadProducts().catch(error => {
        console.log('Loading products failed' + error)
      })
    }
  }, [products, loadProducts])

  return (
    <Container>
      <List className="d-flex flex-wrap">
        <div className="filter-wrapper">
          <Filters />
        </div>
        <div className="products">
          <h1 className="products__title">Products</h1>
          <ItemTypes />
          <div className="products__items d-flex flex-wrap align-items-center">
            {loading ? (
              <Spinner />
            ) : (
              <ProductItem products={products} />
            )}
          </div>
          {
            !(products.length < 15 && currentPage === 1) &&
              <div className="text-center mt-4 d-flex justify-content-center">
                {
                  currentPage > 1 &&
                  <PagerPrev className="mr-3 cursor-pointer" onClick={() => loadProducts(currentPage - 1)}>
                    <img src={left} alt="prev" className="mr-2"/>
                    Prev
                  </PagerPrev>
                }
                {
                  products.length > 15 &&
                  <PagerNext className="cursor-pointer" onClick={() => loadProducts(currentPage + 1)}>
                    Next
                    <img src={right} alt="next" className="ml-2"/>
                  </PagerNext>
                }
              </div>
          }
        </div>
        <div className="basket-wrapper">
          <Basket />
        </div>
      </List>
    </Container>
  )
}

const List = styled.div`
  .filter-wrapper, .basket-wrapper {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0px 16px;
    @media ${device.laptop} {
      flex: 0 0 296px;
      max-width: 296px;
      padding: 0px;
    }
  }
  .products {
    flex: 2 1 0%;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 20px;
    &__title {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 26px;  
      letter-spacing: 0.25px;
      color: #6F6F6F;
    }
    &__items {
      background-color: #fff;
      padding: 20px;
      box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
      border-radius: 2px;
    }
  }
`
const PagerPrev = styled.div`
  color: #1EA4CE;
  font-weight: 600;
`

const PagerNext = styled.div`
  color: #697488;
  font-weight: 600;
`

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  loadProducts: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products,
    currentPage: state.products?.page || 1,
    loading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = {
  loadProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
