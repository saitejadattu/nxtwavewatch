import styled from 'styled-components'

export const Li = styled.li`
  margin: 20px;
  display: ${props => (props.display ? props.display : '')};
  flex-direction: ${props => (props.fd ? props.fd : '')};
  justify-content: ${props => (props.jc ? props.jc : '')};
  align-self: ${props => (props.as ? props.as : '')};
  flex-wrap: ${props => (props.fw ? props.fw : '')};
`
export const Image = styled.img`
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
`
export const Para = styled.p`
  color: ${props => (props.color ? props.color : '')};
  font-weight: ${props => (props.fw ? props.fw : '')};
`
export const Heading = styled.h1`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
`
