import styled from 'styled-components'

const Card = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 24px;
`

export default Card
