import styled from 'styled-components'
import { connect } from 'react-redux'
import { removeItem, increaseQuantity, decreaseQuantity } from '../../redux/actions/basketActions'
import { formatNumber } from '../../helpers/utils'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'

const BasketItem = ({ basket, removeItem, increaseQuantity, decreaseQuantity }) => {
  return (
    basket.basket.map(item => {
      return (
        <Wrapper className="d-flex justify-content-between align-items-center" key={item.slug}>
          <div>
            <p className="mb-0">{item.name}</p>
            <Price className="mb-0">{formatNumber(item.price)}</Price>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {
              item.quantity > 1 &&
              <Button onClick={() => { decreaseQuantity(item) }}>
                <img src={minus} alt="minus"/>
              </Button>
            }
            {
              item.quantity === 1 &&
              <Button onClick={() => { removeItem(item) }}>
                <img src={minus} alt="minus"/>
              </Button>
            }
            <Label>{item.quantity}</Label>
            <Button onClick={() => { increaseQuantity(item) }}>
              <img src={plus} alt="plus"/>
            </Button>
          </div>
        </Wrapper>
      )
    })
  )
}

const Wrapper = styled.div`
  border-bottom: 2px solid #F4F4F4;
  padding: 16px 0px;
`
const Button = styled.div`
  color: #1EA4CE;
  font-size: 22px;
  cursor: pointer;
`
const Label = styled.span`
  background-color: #1EA4CE;
  padding: 6px 12px;
  margin: 0 8px;
  color: #fff;
  font-size:15px;
  line-height: 20px;
`
const Price = styled.p`
  color: #1EA4CE;
  font-weight: 600;
`

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

const mapDispatchToProps = {
  removeItem,
  increaseQuantity,
  decreaseQuantity
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketItem)
