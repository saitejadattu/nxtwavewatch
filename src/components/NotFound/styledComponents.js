import styled from 'styled-components'

export const Div = styled.div`
    display: ${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content: ${props => (props.jc ? props.jc : '')};
    align-self:${props => (props.as ? props.as : '')};
    height:${props => (props.height ? props.height : '')};
    width:${props => (props.width ? props.width : '')};
    align-items:${props => (props.ai ? props.ai : '')}
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-radius:${props => (props.radius ? props.radius : '')}px;
    margin-left:${props => (props.ml ? props.ml : '')}px;
    padding-left:${props => (props.pl ? props.pl : '')}px;

`
export const Image = styled.img`
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  align-self: ${props => (props.as ? props.as : '')};
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
export const MainDiv = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`
