import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

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
    padding:${props => (props.p ? props.p : '')}px;
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  color: red;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  color: #ff0000;
  align-self: center;
  font-size: 18px;
  height: 70px;
  width: 70px;
  padding: 20px;
  border-radius: 50px;
`
export const IconDiv = styled.div`
  display: ${props => (props.display ? props.display : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  width: 179vh;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  padding: ${props => (props.p ? props.p : '')}px;
  padding-top: 20px;
  padding-bottom: 20px;
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
export const Ul = styled.ul`
  list-style-type: none;
  display: ${props => (props.display ? props.display : '')};
  flex-wrap: ${props => (props.fw ? props.fw : '')};
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  padding: ${props => (props.p ? props.p : '')}px;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  margin-top: 0px;
  padding-top: 0px;
`
export const MobDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
export const Dov = styled.div`
  height: ${props => (props.height ? props.height : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`
