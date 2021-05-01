import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { formatNumber } from '../../helpers/utils'
import { device } from '../common/Device'
import { addToCart, increaseQuantity } from '../../redux/actions/basketActions'

const ProductItem = ({ products, basket, addToCart, increaseQuantity }) => {
  const checkProduct = product => {
    return basket.basket.find(item => item.slug === product.slug)
  }

  return (
    <>
      {
        products.length > 0
          ? products.map((product, index) => {
            return (
              <Product key={index}>
                <div className="product">
                  <figure className="product__img">
                    <img src="http://cdn.getir.com/product/5cf272539463890001c3fd30_tr_1586450141796.jpeg" alt={product.name} />
                  </figure>
                  <div className="product__price">{formatNumber(product.price)}</div>
                  <p className="product__name">{product.name}</p>
                  {
                    !checkProduct(product) && <Button type="button" onClick={() => addToCart(product)}>Add</Button>
                  }
                  {
                    checkProduct(product) && <Button type="button" onClick={() => increaseQuantity(product)}>Add</Button>
                  }
                </div>
              </Product>
            )
          })
          : <p>Ürün Bulunamadı....</p>
      }
    </>
  )
}

const Product = styled.div`
  width: 50%;
  flex: 0 0 50%;
  padding: 0 10px;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    width: 25%;
    flex: 0 0 25%;
  }
  .product{
    &__img {
      width: 100%;
      height: 100%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid #F3F0FE;
      border-radius: 12px;
      img {
        width: 100%;
        height: 100%;
        padding: 16px;
        object-fit: cover;
      }
    }
    &__price {
      color: #1EA4CE;
      font-weight: 600;
      line-height: 20px;
    }
    &__name {
      color: #191919;
      font-weight: 600;
      margin-bottom: 8px;
      height: 45px;
      overflow: hidden;
    }
  }
`

const Button = styled.button`
  width: 100%;
  text-align: center;
  background: #1EA4CE;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
`
const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

const mapDispatchToProps = {
  addToCart,
  increaseQuantity
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem)
