import React from 'react'
import { connect } from 'react-redux'
import logo from '../../logo.png'
import styled from 'styled-components'
import Container from './Container'
import { formatNumber } from '../../helpers/utils'
import basketIcon from '../../assets/basket.svg'
import { device } from '../common/Device'

const Header = ({ total }) => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <img src={logo} alt="Market"/>
        </LogoWrapper>
        <Cart>
          <img src={basketIcon} alt="İcon"/>
          <p className="mb-0">{ total ? formatNumber(total) : ' ₺ 0,00'}</p>
        </Cart>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: #1EA4CE;
  margin-bottom: 38px;
  padding: 0px 16px;
  @media ${device.mobileL} {
    text-align: center;
  }
`
const LogoWrapper = styled.div`
  padding: 19px 0px;
  margin-right: auto;
  margin-left: auto;
`

const Cart = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 26px 24px;
  width: 129px;
  background: #147594;
  display: flex;
  align-items: center;
  color: #fff;
  img {
    margin-right: 13px;
  }
  p {
    font-weight: 600;
  }
`

const mapStateToProps = state => {
  return {
    total: state.basket.total
  }
}

export default connect(
  mapStateToProps
)(Header)
