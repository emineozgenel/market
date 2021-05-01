import styled from 'styled-components';
import { connect } from 'react-redux';
import BasketItem from './BasketItem';
import { formatNumber } from '../../helpers/utils';

const Basket = ({ basket, total }) => (
  <BasketWrapper className="basket">
    { basket.length
      ? (
        <div className="basket">
          <BasketItem />
          <Total>{formatNumber(total)}</Total>
        </div>
      )
      : (
        <div className="text-center">
          <p className="text-base-color">Sepetiniz şu an boş</p>
          <p>Sipariş vermek için sepetinize ürün ekleyin</p>
        </div>
      )}
  </BasketWrapper>
);

const BasketWrapper = styled.div`
  border: 8px solid #1EA4CE;
  padding: 25px 22px;
  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;
const Total = styled.div`
  border: 3px solid #1EA4CE;
  color: #1EA4CE;
  font-weight: 600;
  border-radius: 2px;
  padding: 17px 24px;
  margin-top: 16px;
  width: min-content;
  margin-left: auto;
`;

const mapStateToProps = (state) => ({
  basket: state.basket.basket,
  total: state.basket.total,
});

export default connect(
  mapStateToProps,
)(Basket);
