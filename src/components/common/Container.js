import styled from 'styled-components'

const Container = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  max-width: 1232px;
  margin-left: auto;
  margin-right: auto;
`

export default Container
